import React, { useEffect, useState } from "react";
import "./WeatherContainer.css";
import AutocompleteSearch from "../AutocompleteSearch/AutocompleteSearch";
import { useMenu } from "../../contexts/MenuContext";
import { CityType } from "../../types/cities";
import CurrentConditions from "../CurrentConditions/CurrentConditions";
import axios from "axios";
import { CurrentConditionType } from "../../types/currentCondition";

const WeatherContainer: React.FC = () => {
	const { isMenuOpen } = useMenu();
	const [selectedCity, setSelectedCity] = useState<CityType | null>(null);
	const [currentWeatherData, setCurrentWeatherData] =
		useState<CurrentConditionType | null>(null);

	const openMenuClasses = "menu-open";
	const closeMenuClasses = "w-full";
	const weatherContainerClasses = `p-5 flex h-screen overflow-y-auto content-start gap-5 flex-wrap transition-all duration-300 ease-in ${
		isMenuOpen ? openMenuClasses : closeMenuClasses
	}`;

	useEffect(() => {
		if (selectedCity) {
			const fetchWeatherData = async () => {
				try {
					const response = await axios.get(
						"https://api.openweathermap.org/data/2.5/weather",
						{
							params: {
								q: selectedCity.name,
								units: "metric",
								appid: "7828a641250d5ab563aeda84c0d75e38",
							},
						}
					);
					setCurrentWeatherData(response.data);
				} catch (error) {
					console.error("Error fetching forecast data:", error);
				}
			};

			fetchWeatherData();
		}
	}, [selectedCity]);

	return (
		<div className={weatherContainerClasses}>
			<AutocompleteSearch
				selectedCity={selectedCity}
				setSelectedCity={setSelectedCity}
			/>

			<div className="flex w-full content-start gap-5">
				{selectedCity && !currentWeatherData ? (
					<div>Loading...</div>
				) : (
					currentWeatherData && (
						<CurrentConditions {...currentWeatherData} />
					)
				)}
			</div>
		</div>
	);
};

export default WeatherContainer;
