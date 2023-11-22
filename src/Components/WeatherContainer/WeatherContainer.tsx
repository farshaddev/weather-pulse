import React from "react";
import "./WeatherContainer.css";
import AutocompleteSearch from "../AutocompleteSearch/AutocompleteSearch";
import { useMenu } from "../../contexts/MenuContext";

const WeatherContainer: React.FC = () => {
	const { isMenuOpen } = useMenu();

	const openMenuClasses = "menu-open";
	const closeMenuClasses = "w-full";
	const weatherContainerClasses = `p-5 flex h-screen overflow-y-auto flex-col transition-all duration-300 ease-in ${
		isMenuOpen ? openMenuClasses : closeMenuClasses
	}`;

	return (
		<div className={weatherContainerClasses}>
			<AutocompleteSearch />
		</div>
	);
};

export default WeatherContainer;
