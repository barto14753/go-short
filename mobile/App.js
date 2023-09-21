import React from "react";
import { Button, Stack, Text, TextInput } from "@react-native-material/core";
import { SafeAreaProvider } from "react-native-safe-area-context";
import CenteredText from "./CenteredText";

const App = () => (
	<>
		<SafeAreaProvider>
			<CenteredText />
		</SafeAreaProvider>
	</>
);

export default App;
