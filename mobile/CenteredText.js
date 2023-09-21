import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import Input from "./Input";

const CenteredText = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text} variant="displayLarge">
				Short URL
			</Text>
			<Text style={styles.text} variant="titleSmall">
				Make your urls much shorter
			</Text>
			<Input />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		margin: 5,
	},
});

export default CenteredText;
