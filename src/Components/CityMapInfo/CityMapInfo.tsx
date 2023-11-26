import { FaMapMarkerAlt } from "react-icons/fa";
import MapLoader from "../MapLoader/MapLoader";
import { Popup } from "react-leaflet";

interface CityMapInfoProps {
	lat: number;
	lon: number;
	name: string;
	country: string;
	population: number;
}

const CityMapInfo: React.FC<CityMapInfoProps> = ({
	lat,
	lon,
	name,
	country,
	population,
}) => {
	return (
		<MapLoader
			className="h-60 w-full rounded-md border border-gray-200 shadow-sm dark:border-slate-700 dark:bg-slate-700 sm:order-last sm:h-[368px] sm:w-1/2 md:h-[355px] lg:h-414 2xl:w-2/3"
			center={[lat, lon]}
			initialZoom={9}
			clickedPosition={[lat, lon]}
		>
			<Popup>
				<div className="map-popup">
					<div className="mb-2 flex items-center gap-1 text-sm text-gray-400">
						<FaMapMarkerAlt />
						{name}, <span className="font-semibold">{country}</span>
					</div>
					<div className="flex items-center justify-between gap-2">
						<div className="flex items-center gap-2">
							<span className="text-xs text-indigo-300">
								Population:
							</span>
							<span className="text-sm text-gray-400">
								{population}
							</span>
						</div>
					</div>
					<div className="flex items-center justify-between gap-2">
						<div className="flex items-center gap-2">
							<span className="text-xs text-indigo-300">
								Latitude:
							</span>
							<span className="text-sm text-gray-400">{lat}</span>
						</div>
						<div className="flex items-center gap-2">
							<span className="text-xs text-indigo-300">
								Longitude:
							</span>
							<span className="text-sm text-gray-400">{lon}</span>
						</div>
					</div>
				</div>
			</Popup>
		</MapLoader>
	);
};

export default CityMapInfo;
