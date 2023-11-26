import {
	CurrentCondition_CloudsType,
	CurrentCondition_MainType,
	CurrentCondition_WeatherType,
	CurrentCondition_WindType,
} from "../../types/currentCondition";
import { convertTimestampToDate } from "../../utils";

interface CurrentConditionsProps {
	weather: CurrentCondition_WeatherType[];
	main: CurrentCondition_MainType;
	wind: CurrentCondition_WindType;
	visibility: number;
	clouds: CurrentCondition_CloudsType;
	dt: number;
}

const CurrentConditions: React.FC<CurrentConditionsProps> = ({
	weather,
	main,
	wind,
	visibility,
	clouds,
	dt,
}) => {
	return (
		<div className="flex flex-col items-stretch gap-2">
			<div className="flex items-center justify-between gap-4">
				<img
					src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
					alt={weather[0].description}
					className="h-22 w-22"
				/>
				<div className="flex items-center gap-2">
					<p className="text-4xl font-medium text-indigo-600 dark:text-indigo-300 lg:text-5xl">
						{main.temp}°C
					</p>
				</div>
			</div>

			<span className="gap-1 text-xs font-medium text-indigo-600 dark:text-indigo-300">
				Feels Like: {main.feels_like}
			</span>

			<div className="flex items-center gap-1 border-b border-slate-300 pb-2 text-sm font-medium text-slate-500 dark:border-slate-600 dark:text-gray-300">
				<img
					src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
					alt={weather[0].description}
					className="h-6 w-6"
				/>
				<span>
					{weather[0].main} {" / "}
					{weather[0].description}
				</span>
			</div>

			<div className="flex items-center justify-between gap-1">
				<span className="flex items-start gap-1 text-sm font-medium text-slate-500 dark:text-gray-300 lg:text-base">
					Max: {main.temp_min}°C
				</span>
				<span className=" text-sm font-medium text-slate-500 dark:text-gray-400">
					Min: {main.temp_max}°C
				</span>
			</div>

			<div className="flex items-center justify-between gap-1 text-sm font-medium text-slate-500 dark:text-gray-300 lg:text-base">
				<span>Pressure: {main.pressure} hpa</span>
				<span>Humidity: {main.humidity}%</span>
			</div>

			<div className="flex items-center justify-between gap-1 text-sm font-medium text-slate-500 dark:text-gray-300 lg:text-base">
				<span>Wind Speed: {wind.speed} m/s</span>
				<span>Wind Direction: {wind.deg}°</span>
			</div>

			<div className="flex items-center justify-between gap-1 border-b border-slate-300 pb-2 text-sm font-medium text-slate-500 dark:border-slate-600 dark:text-gray-300 lg:text-base">
				<span>Visibility: {visibility} m</span>
				<span>Clouds: {clouds.all}%</span>
			</div>

			<div className="flex items-center justify-end gap-1 text-sm font-medium text-slate-500 dark:text-gray-300 lg:text-base">
				<span>Last Updated: {convertTimestampToDate(dt)}</span>
			</div>
		</div>
	);
};

export default CurrentConditions;
