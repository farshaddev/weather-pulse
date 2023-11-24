import React, { useState } from "react";
import "./App.css";
import Menu from "./Components/Menu/Menu";
import WeatherContainer from "./Components/WeatherContainer/WeatherContainer";

function App(): JSX.Element {
	const [isDarkMode] = useState(true);

	const darkClasses =
		"dark:bg-slate-800 dark:text-white dark:border-gray-900 dark:shadow-lg";
	const lightClasses = "bg-white text-black border-gray-300 shadow-lg";
	return (
		<div className={isDarkMode ? "dark" : ""}>
			<div className={`app ${darkClasses} ${lightClasses}`}>
				<Menu />
				<WeatherContainer />
			</div>
		</div>
	);
}

export default App;
