import React, { useCallback, useEffect, useState } from "react";
import "./WeatherContainer.css";
import AutocompleteSearch from "../AutocompleteSearch/AutocompleteSearch";
import { useMenu } from "../../contexts/MenuContext";
import { CityType } from "../../types/cities";
import CurrentConditions from "../CurrentConditions/CurrentConditions";
import axios from "axios";
import { CurrentConditionType } from "../../types/currentCondition";
import MapLoader from "../MapLoader/MapLoader";
import MapCoordinates from "../MapCoordinates/MapCoordinates";
// @ts-ignore
import LoadingSVG from "../../svg/loading.svg";
import BounceDots from "../BounceDots/BounceDots";
import { FetchWeatherParamsType } from "../../types/fetchWeatherParams";
import { WeatherForecastType } from "../../types/weatherForcast";
import { Popup } from "react-leaflet";
import { FaMapMarkerAlt } from "react-icons/fa";

const WeatherContainer: React.FC = () => {
	const { isMenuOpen } = useMenu();
	const [confirmCoordinates, setConfirmCoordinates] =
		useState<boolean>(false);
	const [selectedCity, setSelectedCity] = useState<CityType | null>(null);
	const [currentWeatherData, setCurrentWeatherData] =
		useState<CurrentConditionType | null>(null);
	const [WeatherForecastData, setWeatherForecastData] =
		useState<WeatherForecastType | null>(null);

	const [selectedCoordinates, setSelectedCoordinates] = useState<
		[number, number] | null
	>(null);

	const openMenuClasses = "menu-open";
	const closeMenuClasses = "w-full";
	const weatherContainerClasses = `relative p-5 flex h-screen overflow-y-auto content-start gap-5 flex-wrap transition-all duration-300 ease-in ${
		isMenuOpen ? openMenuClasses : closeMenuClasses
	}`;

	const fetchWeatherData = useCallback(async () => {
		try {
			const params: FetchWeatherParamsType = {
				units: "metric",
				appid: "7828a641250d5ab563aeda84c0d75e38",
			};
			if (selectedCity) params.q = selectedCity.name;
			if (selectedCoordinates) {
				setConfirmCoordinates(true);
				params.lat = selectedCoordinates[0];
				params.lon = selectedCoordinates[1];
			}
			if (params.q || (params.lat && params.lon)) {
				const currentWeatherConditionResponse = await axios.get(
					"https://api.openweathermap.org/data/2.5/weather",
					{
						params: params,
					}
				);
				setCurrentWeatherData(currentWeatherConditionResponse.data);

				const WeatherForecastResponse = await axios.get(
					"https://api.openweathermap.org/data/2.5/forecast",
					{
						params: params,
					}
				);
				setWeatherForecastData(WeatherForecastResponse.data);
			} else {
				console.log("no city or coordinates selected");
			}
		} catch (error) {
			console.error("Error fetching forecast data:", error);
		}
	}, [selectedCity, selectedCoordinates]);

	useEffect(() => {
		if (selectedCity) {
			fetchWeatherData();
		}
	}, [fetchWeatherData, selectedCity]);

	return (
		<div className={weatherContainerClasses}>
			{!confirmCoordinates && !selectedCity && (
				<MapLoader
					className="absolute left-0 top-0 z-0 h-full w-full cursor-pointer"
					clickedPosition={selectedCoordinates}
					setClickedPosition={setSelectedCoordinates}
				/>
			)}

			<div className="relative z-20 flex w-1/3 flex-col items-stretch gap-2 rounded-md bg-gray-100 p-4 opacity-90 transition-all duration-200 hover:opacity-100 dark:bg-slate-700">
				<h2 className="mb-2 text-lg font-medium text-gray-300">
					{selectedCoordinates
						? "Your Map Coordinates:"
						: selectedCity
						  ? "Your Selected City:"
						  : "Search your City or choose on the Map:"}
				</h2>
				{selectedCoordinates ? (
					<MapCoordinates
						setCurrentWeatherData={setCurrentWeatherData}
						clickedPosition={selectedCoordinates}
						setClickedPosition={setSelectedCoordinates}
						handleConfirm={fetchWeatherData}
						confirmCoordinates={confirmCoordinates}
						setConfirmCoordinates={setConfirmCoordinates}
					/>
				) : (
					<AutocompleteSearch
						setCurrentWeatherData={setCurrentWeatherData}
						selectedCity={selectedCity}
						setSelectedCity={setSelectedCity}
					/>
				)}
			</div>

			<div className="relative z-10 flex w-full content-start gap-5">
				{(selectedCity || confirmCoordinates) &&
				!currentWeatherData &&
				!WeatherForecastData ? (
					<div className="flex h-full w-full items-center justify-center gap-1 p-5">
						<img src={LoadingSVG} alt="weather loading" />
						Loading
						<BounceDots />
					</div>
				) : (
					currentWeatherData &&
					WeatherForecastData && (
						<>
							<CurrentConditions {...currentWeatherData} />
							<MapLoader
								className="h-414 w-2/3 rounded-md"
								center={[
									WeatherForecastData.city.coord.lat,
									WeatherForecastData.city.coord.lon,
								]}
								initialZoom={10}
								clickedPosition={[
									WeatherForecastData.city.coord.lat,
									WeatherForecastData.city.coord.lon,
								]}
							>
								<Popup>
									<div className="map-popup">
										<div className="mb-2 flex items-center gap-1 text-sm text-gray-400">
											<FaMapMarkerAlt />
											{
												WeatherForecastData.city.name
											},{" "}
											<span className="font-semibold">
												{
													WeatherForecastData.city
														.country
												}
											</span>
										</div>
										<div className="flex items-center justify-between gap-2">
											<div className="flex items-center gap-2">
												<span className="text-xs text-indigo-300">
													Population:
												</span>
												<span className="text-sm text-gray-400">
													{
														WeatherForecastData.city
															.population
													}
												</span>
											</div>
										</div>
										<div className="flex items-center justify-between gap-2">
											<div className="flex items-center gap-2">
												<span className="text-xs text-indigo-300">
													Latitude:
												</span>
												<span className="text-sm text-gray-400">
													{
														WeatherForecastData.city
															.coord.lat
													}
												</span>
											</div>
											<div className="flex items-center gap-2">
												<span className="text-xs text-indigo-300">
													Longitude:
												</span>
												<span className="text-sm text-gray-400">
													{
														WeatherForecastData.city
															.coord.lon
													}
												</span>
											</div>
										</div>
									</div>
								</Popup>
							</MapLoader>
						</>
					)
				)}
			</div>
		</div>
	);
};

export default WeatherContainer;
