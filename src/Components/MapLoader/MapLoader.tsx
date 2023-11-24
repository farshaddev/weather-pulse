import React from "react";
import {
	MapContainer,
	Marker,
	TileLayer,
	ZoomControl,
	useMapEvents,
} from "react-leaflet";
import type { MapContainerProps, TileLayerProps } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./MapLoader.css";

interface ExtendedMapContainerProps extends MapContainerProps {
	center: number[];
	zoom: number;
	minZoom?: number;
	zoomControl?: boolean;
	doubleClickZoom?: boolean;
}

interface ExtendedTileLayerProps extends TileLayerProps {
	attribution: string;
}

type MapCoordinatesType = [number, number];

interface MapLoaderProps {
	clickedPosition: MapCoordinatesType | null;
	setClickedPosition: (arg0: MapCoordinatesType) => void;
	className: string;
}

const MapLoader: React.FC<MapLoaderProps> = ({
	clickedPosition,
	setClickedPosition,
	className,
}) => {
	const initialCenter = [19.15, -23.55];

	const mapProps: ExtendedMapContainerProps = {
		center: initialCenter,
		zoom: 3,
		minZoom: 3,
		zoomControl: false,
		doubleClickZoom: false,
	};

	const tileLayerProps: ExtendedTileLayerProps = {
		url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
		attribution:
			'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	};

	const handleClick = (event: any) => {
		const { lat, lng } = event.latlng;
		setClickedPosition([lat, lng]);
	};

	const ClickHandler = ({ onClick }: { onClick: (event: any) => void }) => {
		useMapEvents({
			click: onClick,
		});
		return null;
	};

	return (
		<MapContainer className={className} {...mapProps}>
			<TileLayer {...tileLayerProps} />
			{clickedPosition && (
				<Marker position={clickedPosition}>
					{/* <Popup>
						You clicked here! <br /> <FaMapMarkerAlt />
					</Popup> */}
				</Marker>
			)}
			<ZoomControl position="bottomleft" />
			<ClickHandler onClick={handleClick} />
		</MapContainer>
	);
};

export default MapLoader;
