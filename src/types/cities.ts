export interface CityType {
	id: number;
	name: string;
	state: string;
	country: string;
	coord: {
		lon: number;
		lat: number;
	};
}
