import React, { ChangeEvent, useState } from "react";
import citiesData from "../../Assets/json/cities.json";
import { CityType } from "../../Types/cities";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import BounceDots from "../BounceDots/BounceDots";
import { IoIosRefresh } from "react-icons/io";

interface AutocompleteSearchProps {
	selectedCity: (CityType | null) | undefined;
	setSelectedCity: (city: CityType | null) => void;
	setCurrentWeatherData: (arg0: null) => void;
}

const AutocompleteSearch: React.FC<AutocompleteSearchProps> = ({
	selectedCity,
	setSelectedCity,
	setCurrentWeatherData,
}) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [loading, setLoading] = useState(false);
	const [suggestedCities, setSuggestedCities] = useState<CityType[]>([]);
	const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | undefined>(
		undefined
	);

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		setSearchTerm(value);

		if (timeoutId) {
			clearTimeout(timeoutId);
		}

		if (value.length > 2) {
			setLoading(true);

			const newTimeoutId = setTimeout(() => {
				const filteredCities = (citiesData as CityType[]).filter(
					(city: CityType) =>
						city.name.toLowerCase().includes(value.toLowerCase())
				);

				setSuggestedCities(filteredCities);
				setLoading(false);
			}, 2000);

			setTimeoutId(newTimeoutId);
		} else {
			setSuggestedCities([]);
			setLoading(false);
		}
	};

	const handleCitySelect = (selectedCityObj: CityType) => {
		console.log("Selected City:", selectedCityObj);
		setSuggestedCities([]);
		setSelectedCity(selectedCityObj);
		setSearchTerm(selectedCityObj.name);
	};

	const handleReset = () => {
		setSuggestedCities([]);
		setSelectedCity(null);
		setSearchTerm("");
		setCurrentWeatherData(null);
	};

	return (
		<div className="relative flex flex-col items-center gap-2 sm:flex-row">
			{loading && (
				<AiOutlineLoading3Quarters className="absolute right-1.5 top-2 z-20 animate-spin text-sm text-slate-600 dark:text-slate-400" />
			)}
			<input
				type="text"
				className="peer h-8 w-full flex-1 rounded-md bg-slate-200 p-1 drop-shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:bg-slate-600 dark:focus:border-slate-900 dark:focus:ring-slate-900"
				value={searchTerm}
				onFocus={handleReset}
				onChange={handleInputChange}
				disabled={selectedCity ? true : false}
			/>
			{selectedCity && (
				<button
					className="absolute right-0 top-0 rounded-md bg-slate-300 p-2 text-xs text-slate-700 transition-all duration-200 hover:bg-slate-200 sm:static"
					type="button"
					onClick={() => handleReset()}
				>
					<span className="hidden sm:block">Search Again</span>
					<span className="block sm:hidden">
						<IoIosRefresh />
					</span>
				</button>
			)}
			{searchTerm === "" ? (
				<>
					<div className="pointer-events-none absolute left-1.5 top-1.5 flex gap-1 text-sm text-slate-600 dark:text-slate-400">
						Lon
						<BounceDots />
					</div>
					<span className="flex-none text-xs text-slate-600 dark:text-slate-400">
						Type 3 Charecter at least.
					</span>
				</>
			) : !loading &&
			  searchTerm.length > 2 &&
			  suggestedCities.length < 1 &&
			  !selectedCity ? (
				<span className="flex-none text-xs text-slate-600 dark:text-slate-400">
					Not Found! Try "London" instead.
				</span>
			) : (
				""
			)}
			{suggestedCities.length > 0 && (
				<div className="absolute left-0 top-full z-10 mt-1 max-h-40 w-full overflow-y-auto overflow-x-hidden rounded-md bg-gray-200 p-1 dark:bg-slate-600">
					<ul>
						{suggestedCities.map((city) => (
							<li
								key={city.id}
								className="cursor-pointer rounded-md p-2 text-sm leading-4 hover:bg-gray-300 dark:hover:bg-slate-800"
								onClick={() => handleCitySelect(city)}
							>
								{city.name}, {city.country}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default AutocompleteSearch;
