type WeatherForecast_City_CroodType = {
	lat: number;
	lon: number;
};

type WeatherForecast_CityType = {
	id: number;
	name: string;
	coord: WeatherForecast_City_CroodType;
	country: string;
	population: number;
	timezone: number;
	sunrise: number;
	sunset: number;
};

type WeatherForecast_List_MainType = {
	temp: number;
	feels_like: number;
	temp_min: number;
	temp_max: number;
	pressure: number;
	sea_level: number;
	grnd_level: number;
	humidity: number;
	temp_kf: number;
};

type WeatherForecast_List_WeatherType = {
	id: number;
	main: string;
	description: string;
	icon: string;
};

type WeatherForecast_List_CloudsType = {
	all: number;
};

type WeatherForecast_List_WindType = {
	speed: number;
	deg: number;
	gust: number;
};

type WeatherForecast_List_RainType = {
	"3h": number;
};

type WeatherForecast_List_SysType = {
	pod: string;
};

export type WeatherForecast_ListType = {
	dt: number;
	main: WeatherForecast_List_MainType;
	weather: WeatherForecast_List_WeatherType[];
	clouds: WeatherForecast_List_CloudsType;
	wind: WeatherForecast_List_WindType;
	visibility: number;
	pop: number;
	rain: WeatherForecast_List_RainType;
	sys: WeatherForecast_List_SysType;
	dt_txt: string;
};

export interface WeatherForecastType {
	cod: string;
	message: number;
	cnt: number;
	list: WeatherForecast_ListType[];
	city: WeatherForecast_CityType;
}
