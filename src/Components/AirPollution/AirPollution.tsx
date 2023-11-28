import {
	AirPollution_coordType,
	AirPollution_listType,
} from "../../Types/airPollution";

interface AirPollutionProps {
	airPollutionData: AirPollutionType;
}

interface AirPollutionType {
	coord: AirPollution_coordType;
	list: AirPollution_listType[];
}

const AirPollution: React.FC<AirPollutionProps> = ({ airPollutionData }) => {
	const data = airPollutionData.list[0];
	return (
		<>
			<h3 className="mb-2 text-lg font-medium text-slate-600 dark:text-gray-300">
				Today Air Pollution
			</h3>

			<div className="flex gap-2">
				<div className="flex w-2/4 flex-col gap-2 rounded-md bg-indigo-400 p-2 text-center dark:bg-indigo-500">
					<h4 className="text-xs font-medium text-gray-200">AQI</h4>
					<p
						className="text-xs font-medium text-indigo-200"
						data-testid="aqi"
					>
						{data.main.aqi}
					</p>
				</div>
			</div>

			<div className="flex gap-2">
				<div className="flex w-1/4 flex-col gap-2 rounded-md bg-gray-200 p-2 text-center dark:bg-slate-600">
					<h4 className="text-xs font-medium text-gray-500 dark:text-gray-200">
						co
					</h4>
					<p className="text-xs font-medium text-indigo-500 dark:text-gray-200">
						{data.components.co}
					</p>
				</div>
				<div className="flex w-1/4 flex-col gap-2 rounded-md bg-gray-200 p-2 text-center dark:bg-slate-600">
					<h4 className="text-xs font-medium text-gray-500 dark:text-gray-200">
						no
					</h4>
					<p className="text-xs font-medium text-indigo-500 dark:text-gray-200">
						{data.components.no}
					</p>
				</div>
				<div className="flex w-1/4 flex-col gap-2 rounded-md bg-gray-200 p-2 text-center dark:bg-slate-600">
					<h4 className="text-xs font-medium text-gray-500 dark:text-gray-200">
						no2
					</h4>
					<p className="text-xs font-medium text-indigo-500 dark:text-gray-200">
						{data.components.no2}
					</p>
				</div>
				<div className="flex w-1/4 flex-col gap-2 rounded-md bg-gray-200 p-2 text-center dark:bg-slate-600">
					<h4 className="text-xs font-medium text-gray-500 dark:text-gray-200">
						o3
					</h4>
					<p className="text-xs font-medium text-indigo-500 dark:text-gray-200">
						{data.components.o3}
					</p>
				</div>
			</div>

			<div className="flex gap-2">
				<div className="flex w-1/4 flex-col gap-2 rounded-md bg-gray-200 p-2 text-center dark:bg-slate-600">
					<h4 className="text-xs font-medium text-gray-500 dark:text-gray-200">
						so2
					</h4>
					<p className="text-xs font-medium text-indigo-500 dark:text-gray-200">
						{data.components.so2}
					</p>
				</div>
				<div className="flex w-1/4 flex-col gap-2 rounded-md bg-gray-200 p-2 text-center dark:bg-slate-600">
					<h4 className="text-xs font-medium text-gray-500 dark:text-gray-200">
						pm2_5
					</h4>
					<p className="text-xs font-medium text-indigo-500 dark:text-gray-200">
						{data.components.pm2_5}
					</p>
				</div>
				<div className="flex w-1/4 flex-col gap-2 rounded-md bg-gray-200 p-2 text-center dark:bg-slate-600">
					<h4 className="text-xs font-medium text-gray-500 dark:text-gray-200">
						pm10
					</h4>
					<p className="text-xs font-medium text-indigo-500 dark:text-gray-200">
						{data.components.pm10}
					</p>
				</div>
				<div className="flex w-1/4 flex-col gap-2 rounded-md bg-gray-200 p-2 text-center dark:bg-slate-600">
					<h4 className="text-xs font-medium text-gray-500 dark:text-gray-200">
						nh3
					</h4>
					<p className="text-xs font-medium text-indigo-500 dark:text-gray-200">
						{data.components.nh3}
					</p>
				</div>
			</div>
		</>
	);
};

export default AirPollution;
