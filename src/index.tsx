import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { MenuProvider } from "./contexts/MenuContext";
import { ThemeProvider } from "./hooks/ThemeContext";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<ThemeProvider>
			<MenuProvider>
				<App />
			</MenuProvider>
		</ThemeProvider>
	</React.StrictMode>
);
