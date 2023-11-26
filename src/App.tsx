import React from "react";
import "./App.css";
import Menu from "./Components/Menu/Menu";
import WeatherContainer from "./Components/WeatherContainer/WeatherContainer";
import { useTheme } from "./Hooks/ThemeContext";

function App(): JSX.Element {
	const { isDarkMode } = useTheme();

	const darkClasses =
		"dark:bg-slate-800 dark:text-white dark:border-gray-900 dark:shadow-lg";
	const lightClasses = "bg-slate-100 text-black border-gray-300 shadow-lg";

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
