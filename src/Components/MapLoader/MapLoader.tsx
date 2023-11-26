import React from "react";
import * as ReactDOMServer from "react-dom/server";
import {
	MapContainer,
	TileLayer,
	ZoomControl,
	useMapEvents,
} from "react-leaflet";
import type { MapContainerProps, TileLayerProps } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./MapLoader.css";
import ExtendedMarker from "../ExtendedMarker/ExtendedMarker";
import L from "leaflet";
import markerIcon from "../../Assets/images/marker-icon.png";

interface ExtendedMapContainerProps extends MapContainerProps {
	center: [number, number];
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
	center?: MapCoordinatesType;
	initialZoom?: number;
	clickedPosition: MapCoordinatesType | null;
	setClickedPosition?: (arg0: MapCoordinatesType) => void;
	className: string;
	children?: React.ReactNode;
}

const MapLoader: React.FC<MapLoaderProps> = ({
	center,
	initialZoom,
	clickedPosition,
	setClickedPosition,
	className,
	children,
}) => {
	const initialCenter: [number, number] = center ? center : [19.15, -23.55];

	const mapProps: ExtendedMapContainerProps = {
		center: initialCenter,
		zoom: initialZoom ? initialZoom : 3,
		minZoom: 3,
		zoomControl: false,
		doubleClickZoom: false,
	};

	const customIcon = L.divIcon({
		className: "w-10 h-10",
		iconSize: [40, 40],
		iconAnchor: [20, 40],
		popupAnchor: [0, -30],
		html: ReactDOMServer.renderToString(
			<img
				src={markerIcon}
				alt="marker"
				width={40}
				height={40}
				className="h-10 w-10"
			/>
		),
	});

	const tileLayerProps: ExtendedTileLayerProps = {
		url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
		attribution:
			'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	};

	const handleClick = (event: any) => {
		const { lat, lng } = event.latlng;
		if (setClickedPosition) setClickedPosition([lat, lng]);
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
				<ExtendedMarker position={clickedPosition} icon={customIcon}>
					{children && children}
				</ExtendedMarker>
			)}
			<ZoomControl position="bottomleft" />
			{setClickedPosition && <ClickHandler onClick={handleClick} />}
		</MapContainer>
	);
};

export default MapLoader;
