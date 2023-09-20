FROM golang:latest

WORKDIR /app
COPY .. /app
RUN go mod download
ENV PORT=8080
RUN go build -o main
EXPOSE $PORT
CMD ["./main"]
