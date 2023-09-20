import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		type: "dark",
		primary: {
			main: "#3f51b5",
		},
		secondary: {
			main: "#f50057",
		},
		background: {
			default: "#303030",
			paper: "#424242",
		},
		text: {
			primary: "#fff",
			secondary: "rgba(255,255,255,0.7)",
			disabled: "rgba(255,255,255,0.5)",
		},
	},
	typography: {
		fontSize: 15,
		fontWeightLight: 200,
		fontWeightRegular: 300,
		fontFamily: "Lato",
	},
});

export default theme;
