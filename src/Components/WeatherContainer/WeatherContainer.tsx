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
import { FetchWeatherParamsType } from "../../types/fetchWeatherParams";
import {
	WeatherForecastType,
	WeatherForecast_ListType,
} from "../../types/weatherForcast";
import CityMapInfo from "../CityMapInfo/CityMapInfo";
import DailyForecast from "../DailyForecast/DailyForecast";
import HourlyForecast from "../HourlyForecast/HourlyForecast";
import AirPollution from "../AirPollution/AirPollution";
import { AirPollutionType } from "../../types/airPollution";
import Loading from "../Loading/Loading";

interface HourlyForecastType {
	time: string;
	items: WeatherForecast_ListType[];
}
interface DailyForecastType {
	date: string;
	items: WeatherForecast_ListType[];
}

const WeatherContainer: React.FC = () => {
	const { isMenuOpen } = useMenu();
	const [confirmCoordinates, setConfirmCoordinates] =
		useState<boolean>(false);
	const [selectedCity, setSelectedCity] = useState<CityType | null>(null);
	const [currentWeatherData, setCurrentWeatherData] =
		useState<CurrentConditionType | null>(null);
	const [WeatherForecastData, setWeatherForecastData] =
		useState<WeatherForecastType | null>(null);
	const [airPollutionData, setAirPollutionData] =
		useState<AirPollutionType | null>(null);

	const [hourlyForecastData, setHourlyForecastData] = useState<
		HourlyForecastType[] | null
	>(null);
	const [dailyForecastData, setDailyForecastData] = useState<
		DailyForecastType[] | null
	>(null);

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
				const AirPollutionResponse = await axios.get(
					"https://api.openweathermap.org/data/2.5/air_pollution",
					{
						params: params,
					}
				);
				setAirPollutionData(AirPollutionResponse.data);

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

	useEffect(() => {
		if (WeatherForecastData) {
			let firstDate: string | null = null;

			type DailyDataType = {
				date: string;
				items: WeatherForecast_ListType[];
			};

			const dailyData: Record<string, WeatherForecast_ListType[]> = {};
			const hourlyData: Record<string, WeatherForecast_ListType[]> = {};

			WeatherForecastData.list.forEach((item) => {
				// Extract date and time information
				const date = item.dt_txt.split(" ")[0]; // Extracts the date (e.g., "2023-11-24")
				const time = item.dt_txt.split(" ")[1]; // Extracts the time (e.g., "18:00:00")

				if (!firstDate) firstDate = date;

				// Organize data by date
				if (!dailyData[date]) {
					dailyData[date] = [];
				}
				dailyData[date].push(item);

				// Organize data by hour for the first day only
				if (date === firstDate) {
					if (!hourlyData[time]) {
						hourlyData[time] = [];
					}
					hourlyData[time].push(item);
				}
			});

			// Convert dailyData object to an array
			const dailyArray: DailyDataType[] = Object.entries(dailyData).map(
				([date, items]) => ({ date, items })
			);
			setDailyForecastData(dailyArray);

			// Convert hourlyData object to an array
			const hourlyArray = Object.entries(hourlyData).map(
				([time, items]) => ({ time, items })
			);
			setHourlyForecastData(hourlyArray);
		}
	}, [WeatherForecastData]);

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

			{(selectedCity || confirmCoordinates) &&
			!currentWeatherData &&
			!WeatherForecastData ? (
				<Loading />
			) : (
				currentWeatherData &&
				WeatherForecastData && (
					<>
						<div className="relative z-10 flex w-full content-start gap-5">
							<CurrentConditions {...currentWeatherData} />
							<CityMapInfo
								lat={WeatherForecastData.city.coord.lat}
								lon={WeatherForecastData.city.coord.lon}
								name={WeatherForecastData.city.name}
								country={WeatherForecastData.city.country}
								population={WeatherForecastData.city.population}
							/>
						</div>
						<div className="relative z-10 flex w-full content-start gap-5">
							<div className="flex w-1/3 flex-col items-stretch gap-2 rounded-md bg-gray-100 p-4 dark:bg-slate-700">
								<HourlyForecast
									hourlyForecastData={hourlyForecastData}
								/>
							</div>
							<div className="flex w-2/3 items-stretch gap-5">
								{airPollutionData ? (
									<>
										<div className="flex w-1/4 flex-col items-stretch gap-2 rounded-md bg-gray-100 p-4 dark:bg-slate-700">
											<AirPollution
												airPollutionData={
													airPollutionData
												}
											/>
										</div>
										<div className="flex w-3/4 flex-col items-stretch gap-2 rounded-md bg-gray-100 p-4 dark:bg-slate-700">
											<DailyForecast
												dailyForecastData={
													dailyForecastData
												}
											/>
										</div>
									</>
								) : (
									<div className="flex w-full flex-col items-stretch gap-2 rounded-md bg-gray-100 p-4 pr-28 dark:bg-slate-700">
										<DailyForecast
											dailyForecastData={
												dailyForecastData
											}
										/>
									</div>
								)}
							</div>
						</div>
					</>
				)
			)}
		</div>
	);
};

export default WeatherContainer;
