import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import axios from "axios";

const Input = () => {
	const SERVER = "http://0.0.0.0:8080";
	const [url, setUrl] = useState("");
	const [short, setShort] = useState("");

	const shortUrl = () => {
		axios
			.post(SERVER, null, {
				params: { url: url },
			})
			.then((response) => {
				setShort(response.data.url);
			})
			.catch((error) => {});
	};

	return (
		<>
			<View style={styles.container}>
				<TextInput
					style={styles.textInput}
					label="Enter Text"
					onChangeText={(e) => {
						setUrl(e);
					}}
				/>
				<Button mode="outlined">Paste</Button>
			</View>
			<View style={styles.container}>
				<TextInput
					style={styles.textInput}
					value={short}
					disabled
					onChangeText={(newText) => setText(newText)}
				/>
				<Button mode="outlined">Copy</Button>
			</View>
			<Button
				style={styles.button}
				icon="send"
				mode="contained"
				onPress={shortUrl}
			>
				Short
			</Button>
		</>
	);
};

const styles = StyleSheet.create({
	text: {
		margin: 16,
	},
	button: {
		margin: 16,
	},
	container: {
		flexDirection: "row", // Arrange children in a row
		justifyContent: "center", // Center horizontally
		alignItems: "center", // Center vertically
		paddingHorizontal: 16, // Add horizontal padding for spacing
	},
	textInput: {
		flex: 1, // Take up available space
		marginRight: 8, // Add spacing between TextInput and Button
	},
});

export default Input;
