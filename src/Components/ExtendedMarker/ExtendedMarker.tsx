import React, { useEffect, useRef } from "react";
import { Marker, MarkerProps } from "react-leaflet";

interface ExtendedMarkerProps extends MarkerProps {
	openPopup?: () => void;
}

const ExtendedMarker = (props: ExtendedMarkerProps) => {
	const markerRef = useRef<ExtendedMarkerProps>(null);

	useEffect(() => {
		if (markerRef.current) {
			markerRef.current.openPopup();
		}
	}, []);

	return <Marker ref={markerRef} {...props} />;
};

export default ExtendedMarker;
