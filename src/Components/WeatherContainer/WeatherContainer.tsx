import React, { useState } from "react";
import "./WeatherContainer.css";
import AutocompleteSearch from "../AutocompleteSearch/AutocompleteSearch";
import { useMenu } from "../../contexts/MenuContext";
import { CityType } from "../../types/cities";

const WeatherContainer: React.FC = () => {
	const { isMenuOpen } = useMenu();
	const [selectedCity, setSelectedCity] = useState<CityType | null>(null);


	const openMenuClasses = "menu-open";
	const closeMenuClasses = "w-full";
	const weatherContainerClasses = `p-5 flex h-screen overflow-y-auto flex-col transition-all duration-300 ease-in ${
		isMenuOpen ? openMenuClasses : closeMenuClasses
	}`;

	return (
		<div className={weatherContainerClasses}>
			<AutocompleteSearch selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
		</div>
	);
};

export default WeatherContainer;
