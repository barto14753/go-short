import React, { useState } from "react";
import Container from "@mui/material/Container";
import {
	Alert,
	AlertTitle,
	Button,
	Grid,
	TextField,
	Typography,
} from "@mui/material";
import { CopyField } from "@eisberg-labs/mui-copy-field";
import axios from "axios";

export default function Page() {
	const SERVER = "http://0.0.0.0:8080";
	const [url, setUrl] = useState("");
	const [short, setShort] = useState("");
	const [alert, setAlert] = useState(null);

	const shortUrl = () => {
		axios
			.post(SERVER, null, {
				params: { url: url },
			})
			.then((response) => {
				setShort(response.data.url);
			})
			.catch((error) => {
				setAlert({
					severity: "error",
					title: "Server error",
					msg: "Couldn't create url",
				});
			});
	};

	const setCopiedAlert = () => {
		setAlert({
			severity: "success",
			title: "URL copied",
			msg: "Link to " + short + " copied!",
		});
	};

	return (
		<>
			{alert ? (
				<Alert
					severity={alert.severity}
					onClose={() => {
						setAlert(null);
					}}
				>
					<AlertTitle>{alert.title}</AlertTitle>
					{alert.msg}
				</Alert>
			) : (
				<></>
			)}

			<Container
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					height: "70vh",
				}}
			>
				<Typography level="h1" fontWeight="xl" fontSize="64px">
					URL Short
				</Typography>
				<Typography level="h2" fontWeight="xl" fontSize="24px">
					Make your urls much shorter
				</Typography>

				<Grid item xs={8} sx={{ margin: 5 }}>
					<TextField
						fullWidth
						label="Input Field"
						variant="outlined"
						value={url}
						onChange={(e) => setUrl(e.target.value)}
					/>
					<Button
						variant="contained"
						color="primary"
						fullWidth
						onClick={shortUrl}
					>
						Button
					</Button>
				</Grid>

				<CopyField
					sx={{ width: "auto" }}
					value={short}
					disabled={true}
					onCopySuccess={() => {
						setCopiedAlert();
					}}
				/>
			</Container>
		</>
	);
}
