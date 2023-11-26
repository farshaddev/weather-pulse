import React, { useEffect, useRef } from "react";
import { Marker, MarkerProps, Popup } from "react-leaflet";
import * as L from "leaflet";

interface ExtendedMarkerProps extends MarkerProps {
	openPopup?: boolean;
}

const ExtendedMarker: React.FC<ExtendedMarkerProps> = (props) => {
	const markerRef = useRef<L.Marker>(null);

	useEffect(() => {
		if (markerRef.current) {
			markerRef.current.openPopup();
		}
	}, []);

	return <Marker ref={markerRef} {...props} />;
};

export default ExtendedMarker;
