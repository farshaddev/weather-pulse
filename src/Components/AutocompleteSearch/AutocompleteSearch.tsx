import React, { ChangeEvent, useState } from "react";
import citiesData from "../../json/cities.json";
import { CityType } from "../../types/cities";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const AutocompleteSearch = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [loading, setLoading] = useState(false);
	const [suggestedCities, setSuggestedCities] = useState<CityType[]>([]);
	const [selectedCity, setSelectedCity] = useState<CityType | null>(null);
	const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | undefined>(
		undefined,
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
						city.name.toLowerCase().includes(value.toLowerCase()),
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
	};

	return (
		<div className="flex w-1/3 items-center gap-2 rounded-md bg-gray-100 p-4 dark:bg-slate-700">
			<label htmlFor="citySearch" className="flex-initial text-sm">
				Search your City:
			</label>
			<div className="relative flex flex-1 items-center gap-2">
				{loading && (
					<AiOutlineLoading3Quarters className="absolute right-1.5 top-2 animate-spin text-sm text-slate-400" />
				)}
				<input
					id="citySearch"
					type="text"
					className="peer h-8 flex-1 rounded-md bg-gray-200 p-1 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:bg-slate-600 dark:focus:border-indigo-900 dark:focus:ring-indigo-900"
					value={searchTerm}
					onFocus={handleReset}
					onChange={handleInputChange}
				/>
				{searchTerm === "" ? (
					<>
						<div className="pointer-events-none absolute left-1.5 top-1.5 flex gap-1 text-sm text-slate-400">
							Lon
							<span className="animate-bounce">.</span>
							<span
								className="animate-bounce"
								style={{ animationDelay: "100ms" }}
							>
								.
							</span>
							<span
								className="animate-bounce"
								style={{ animationDelay: "200ms" }}
							>
								.
							</span>
						</div>
						<span className="flex-none text-xs text-slate-400">
							Type 3 Charecter at least.
						</span>
					</>
				) : !loading &&
				  searchTerm.length > 2 &&
				  suggestedCities.length < 1 &&
				  !selectedCity ? (
					<span className="flex-none text-xs text-slate-400">
						Not Found! Try "London" instead.
					</span>
				) : (
					""
				)}
				{suggestedCities.length > 0 && (
					<div className="absolute left-0 top-full mt-1 max-h-40 w-full overflow-y-auto overflow-x-hidden rounded-md bg-gray-200 p-1 dark:bg-slate-600">
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
		</div>
	);
};

export default AutocompleteSearch;
