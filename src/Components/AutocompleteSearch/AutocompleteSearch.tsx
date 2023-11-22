import React, { ChangeEvent, useState } from "react";
import citiesData from "../../json/cities.json";
import { CityType } from "../../types/cities";

const AutocompleteSearch = () => {
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

	const handleCitySelect = (selectedCity: CityType) => {
		console.log("Selected City:", selectedCity);
		setSuggestedCities([]);
		setSearchTerm("");
	};

	return (
		<div>
			<label htmlFor="citySearch">Search by City:</label>
			{loading ? "loading" : "done"}
			<input
				id="citySearch"
				type="text"
				placeholder="type 3 characters at least..."
				value={searchTerm}
				onChange={handleInputChange}
			/>
			{suggestedCities.length > 0 && (
				<ul>
					{suggestedCities.map((city) => (
						<li key={city.id} onClick={() => handleCitySelect(city)}>
							{city.name}, {city.country}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default AutocompleteSearch;
