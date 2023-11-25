import { WeatherForecast_ListType } from "../../types/weatherForcast";
import { convertTo12HourFormat } from "../../utils";

interface HourlyForecastProps {
	hourlyForecastData: hourlyForecastType[] | null;
}

interface hourlyForecastType {
	time: string;
	items: WeatherForecast_ListType[];
}

const HourlyForecast: React.FC<HourlyForecastProps> = ({
	hourlyForecastData,
}) => {
	return (
		<>
			<h3 className="mb-2 text-lg font-medium text-gray-300">
				Today Hourly Forecast
			</h3>
			<div className="flex gap-2">
				{hourlyForecastData?.slice(0, 4).map((hourlyForecast) => (
					<div
						key={hourlyForecast.time}
						className="flex w-1/4 flex-col gap-0 rounded-md bg-slate-600 p-2 text-center first:bg-indigo-500"
					>
						<h3 className="text-xs font-medium text-gray-200">
							{convertTo12HourFormat(hourlyForecast.time)}
						</h3>
						<ul>
							{hourlyForecast.items.map((item) => (
								<li
									key={item.dt}
									className="flex flex-col items-center gap-2"
								>
									<img
										src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
										alt={item.weather[0].description}
										width={50}
										height={50}
									/>
									<p className="text-xs text-gray-200">
										{item.weather[0].description}
									</p>
									<p className="text-sm font-medium text-indigo-200">
										{item.main.temp}°C
									</p>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</>
	);
};

export default HourlyForecast;
