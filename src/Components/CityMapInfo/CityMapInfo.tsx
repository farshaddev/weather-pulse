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
			className="h-414 w-2/3 rounded-md"
			center={[lat, lon]}
			initialZoom={10}
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