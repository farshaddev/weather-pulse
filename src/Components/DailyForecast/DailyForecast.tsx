import { WeatherForecast_ListType } from "../../types/weatherForcast";

interface DailyForecastProps {
	dailyForecastData: DailyForecastType[] | null;
}

interface DailyForecastType {
	date: string;
	items: WeatherForecast_ListType[];
}

const DailyForecast: React.FC<DailyForecastProps> = ({ dailyForecastData }) => {
	return (
		<>
			<h3 className="mb-2 text-lg font-medium text-gray-300">
				Daily Forecast
			</h3>
			<div className="flex gap-2">
				{dailyForecastData?.slice(0, 6).map((dailyForecast) => (
					<div
						key={dailyForecast.date}
						className="flex w-1/4 flex-col gap-2 rounded-md bg-slate-600 p-2 py-6 text-center first:bg-indigo-500"
					>
						<h3 className="text-xs font-medium text-gray-200">
							{dailyForecast.date}
						</h3>
						<div className="flex flex-col items-center gap-2">
							<img
								src={`http://openweathermap.org/img/wn/${dailyForecast.items[0].weather[0].icon}@2x.png`}
								alt={
									dailyForecast.items[0].weather[0]
										.description
								}
								width={50}
								height={50}
							/>
							<p className="text-xs text-gray-200">
								{dailyForecast.items[0].weather[0].description}
							</p>
							<p className="text-sm font-medium text-indigo-200">
								{dailyForecast.items[0].main.temp}°C
							</p>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default DailyForecast;
