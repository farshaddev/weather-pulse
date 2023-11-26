import { WeatherForecast_ListType } from "../../Types/weatherForcast";

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
			<h3 className="mb-2 text-lg font-medium text-slate-600 dark:text-gray-300">
				Daily Forecast
			</h3>
			<div className="flex w-full flex-wrap gap-2 md:w-auto 2xl:flex-nowrap">
				{dailyForecastData?.slice(0, 5).map((dailyForecast) => (
					<div
						key={dailyForecast.date}
						className="group flex w-[48%] flex-col gap-2 rounded-md bg-gray-200 p-2 text-center first:bg-indigo-400 last:hidden dark:bg-slate-600 dark:first:bg-indigo-500 md:w-[47%] lg:w-[48%] 2xl:w-1/4 2xl:py-7 2xl:last:block"
					>
						<h3 className="text-xs font-medium text-gray-500 group-first:text-gray-200 dark:text-gray-200">
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
							<p className="text-xs text-gray-500 group-first:text-gray-200 dark:text-gray-200">
								{dailyForecast.items[0].weather[0].description}
							</p>
							<p className="text-sm font-medium text-indigo-500 group-first:text-gray-200 dark:text-indigo-200">
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
