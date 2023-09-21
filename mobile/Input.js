import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

const Input = () => {
	return (
		<>
			<View style={styles.container}>
				<TextInput
					style={styles.textInput}
					label="Enter Text"
					onChangeText={(newText) => setText(newText)}
				/>
				<Button mode="outlined">Copy</Button>
			</View>
			<View style={styles.container}>
				<TextInput
					style={styles.textInput}
					label="Enter Text"
					onChangeText={(newText) => setText(newText)}
				/>
				<Button mode="outlined">Copy</Button>
			</View>
			<Button style={styles.button} icon="send" mode="contained">
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
