import React from "react";
import { Button, Stack, Text, TextInput } from "@react-native-material/core";

const App = () => (
	<>
		<Stack fill center spacing={4}>
			<Text variant="h2" style={{ margin: 16 }}>
				Short URL
			</Text>
			<TextInput
				variant="standard"
				label="URL to short"
				style={{ margin: 16 }}
			/>
			;
			<Button title="Button" />
		</Stack>
	</>
);

export default App;
