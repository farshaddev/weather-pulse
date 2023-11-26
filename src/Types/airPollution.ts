export interface AirPollution_coordType {
	lon: number;
	lat: number;
}

export interface AirPollution_listType {
	main: {
		aqi: number;
	};
	components: {
		co: number;
		no: number;
		no2: number;
		o3: number;
		so2: number;
		pm2_5: number;
		pm10: number;
		nh3: number;
	};
	dt: number;
}

export interface AirPollutionType {
	coord: AirPollution_coordType;
	list: AirPollution_listType[];
}
