import React from "react";

type MapCoordinatesType = [number, number];

interface MapCoordinatesProps {
	clickedPosition: MapCoordinatesType;
	setClickedPosition: (arg0: MapCoordinatesType | null) => void;
	setCurrentWeatherData: (arg0: null) => void;
	handleConfirm: () => void;
	setConfirmCoordinates: (arg0: boolean) => void;
}

const MapCoordinates: React.FC<MapCoordinatesProps> = ({
	clickedPosition,
	setClickedPosition,
	setCurrentWeatherData,
	handleConfirm,
	setConfirmCoordinates,
}) => {
	const handleReset = () => {
		setClickedPosition(null);
		setCurrentWeatherData(null);
		setConfirmCoordinates(false);
	};

	return (
		<div className="flex flex-col gap-2">
			<div className="flex items-center justify-between gap-2">
				<div className="flex items-center gap-2">
					<span className="text-base text-indigo-300">Latitude:</span>
					<span className="text-sm text-gray-400">
						{clickedPosition[0]}
					</span>
				</div>
				<div className="flex items-center gap-2">
					<span className="text-base text-indigo-300">
						Longitude:
					</span>
					<span className="text-sm text-gray-400">
						{clickedPosition[1]}
					</span>
				</div>
			</div>
			<div className="mt-4 flex items-center justify-end gap-4 text-sm">
				<button
					className="rounded-md bg-slate-300 p-2 text-slate-700 transition-all duration-200 hover:bg-slate-200"
					type="button"
					onClick={handleReset}
				>
					Search Again
				</button>
				<button
					className="rounded-md bg-indigo-600 p-2 text-gray-100 transition-all duration-200 hover:bg-indigo-700"
					type="button"
					onClick={handleConfirm}
				>
					Confirm Coordinates
				</button>
			</div>
		</div>
	);
};

export default MapCoordinates;
