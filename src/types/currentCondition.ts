type CurrentCondition_CoordType = {
	lon: number;
	lat: number;
};

export type CurrentCondition_WeatherType = {
	id: number;
	main: string;
	description: string;
	icon: string;
};

export type CurrentCondition_MainType = {
	temp: number;
	feels_like: number;
	temp_min: number;
	temp_max: number;
	pressure: number;
	humidity: number;
};

export type CurrentCondition_WindType = {
	speed: number;
	deg: number;
};

export type CurrentCondition_CloudsType = {
	all: number;
};

export type CurrentCondition_SysType = {
	type: number;
	id: number;
	country: string;
	sunrise: number;
	sunset: number;
};

export interface CurrentConditionType {
	coord: CurrentCondition_CoordType;
	weather: CurrentCondition_WeatherType[];
	base: string;
	main: CurrentCondition_MainType;
	visibility: number;
	wind: CurrentCondition_WindType;
	clouds: CurrentCondition_CloudsType;
	dt: number;
	sys: CurrentCondition_SysType;
	timezone: number;
	id: number;
	name: string;
	cod: number;
}
