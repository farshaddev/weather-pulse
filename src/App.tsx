import React from "react";
import "./App.scss";
import Menu from "./Components/Menu/Menu";
import WeatherContainer from "./Components/WeatherContainer/WeatherContainer";

function App() {
	return (
		<div className="App">
			<Menu />
			<WeatherContainer />
		</div>
	);
}

export default App;
