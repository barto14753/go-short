package main

import (
  "log"
  "net/http"
  "github.com/gin-gonic/gin"
  "context"
	"github.com/redis/go-redis/v9"
  "math/rand"
  "time"
)

var letterRunes = []rune("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ")

func store(client *redis.Client, key string, value string) {
  ctx := context.Background()
  err := client.Set(ctx, key, value, 0).Err()
  if err != nil {
    log.Printf("Cannot store k=%s v=%s", key, value)
    panic(err)
    return
  }
  log.Printf("Stored k=%s v=%s", key, value)
}

func get(client *redis.Client, key string) string {
  ctx := context.Background()
  val, err := client.Get(ctx, key).Result()
  if err != nil {
    log.Printf("Cannot get k=%s", key)
    panic(err)
  }
  log.Printf("Got k=%s v=%s", key, val)
  return val
}

func exist(client *redis.Client, key string) bool {
  ctx := context.Background()
  ok, err := client.Exists(ctx, key).Result()
  if err != nil {
    return false
  }
  return ok == 1
}

func getRandomKey(length int) string {
  b := make([]rune, length)
  for i := range b {
      b[i] = letterRunes[rand.Intn(len(letterRunes))]
  }
  return string(b)
}

func getUniqueKey(client *redis.Client) string {
  for {
    randomKey := getRandomKey(5)
    if !exist(client, randomKey) {
      return randomKey
    }
  }
}

func main() {
  rand.Seed(time.Now().UnixNano())
  r := gin.Default()

  client := redis.NewClient(&redis.Options{
    Addr:	  "localhost:6379",
    Password: "eYVX7EwVmmxKPCDmwMtyKVge8oLd2t81",
    DB:		  0,
  })

  r.POST("/", func(c *gin.Context) {
    url := c.Query("url")
    key := getUniqueKey(client)
    store(client, key, url)
    log.Printf("Created link for %s", url)
    c.JSON(http.StatusOK, gin.H{"url": c.Request.Host + "/" + key, "code": key})
  })

  r.GET("/:key", func(c *gin.Context) {
    key := c.Param("key")
    
    if !exist(client, key) {
      c.JSON(http.StatusNotFound, gin.H{"code": "KEY_NOT_FOUND", "message": "There is no url assigned to key: " + key})
      return
    }
    
    url := get(client, key)
    log.Printf("Return link %s for %s", url, key)
    c.Redirect(http.StatusMovedPermanently, url)
  })

  r.Run()
}