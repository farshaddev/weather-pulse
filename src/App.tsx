import React from "react";
import "./App.css";
import Menu from "./Components/Menu/Menu";
import WeatherContainer from "./Components/WeatherContainer/WeatherContainer";

function App() {
	return (
		<div className="app">
			<Menu />
			<WeatherContainer />
		</div>
	);
}

export default App;
