import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { MenuProvider } from "./contexts/MenuContext";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<MenuProvider>
			<App />
		</MenuProvider>
	</React.StrictMode>
);
