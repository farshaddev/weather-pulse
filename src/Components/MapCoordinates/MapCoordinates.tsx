import React from "react";
import { IoIosRefresh } from "react-icons/io";

type MapCoordinatesType = [number, number];

interface MapCoordinatesProps {
	clickedPosition: MapCoordinatesType;
	setClickedPosition: (arg0: MapCoordinatesType | null) => void;
	setCurrentWeatherData: (arg0: null) => void;
	handleConfirm: () => void;
	confirmCoordinates: boolean;
	setConfirmCoordinates: (arg0: boolean) => void;
}

const MapCoordinates: React.FC<MapCoordinatesProps> = ({
	clickedPosition,
	setClickedPosition,
	setCurrentWeatherData,
	handleConfirm,
	confirmCoordinates,
	setConfirmCoordinates,
}) => {
	const handleReset = () => {
		setClickedPosition(null);
		setCurrentWeatherData(null);
		setConfirmCoordinates(false);
	};

	return (
		<div className="flex flex-col gap-2">
			<div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
				<div className="flex items-center gap-2">
					<span className="text-base text-indigo-300">Latitude:</span>
					<span className="text-xs text-gray-400 2xl:text-sm">
						{clickedPosition[0]}
					</span>
				</div>
				<div className="flex items-center gap-2">
					<span className="text-base text-indigo-300">
						Longitude:
					</span>
					<span className="text-xs text-gray-400 2xl:text-sm">
						{clickedPosition[1]}
					</span>
				</div>
			</div>
			<div className="flex items-center justify-center gap-4 text-sm md:mt-4 md:justify-end">
				<button
					className="rounded-md bg-slate-300 p-2 text-xs text-slate-700 transition-all duration-200 hover:bg-slate-200 sm:static"
					type="button"
					onClick={() => handleReset()}
				>
					<span className="hidden sm:block">Search Again</span>
					<span className="block sm:hidden">
						<IoIosRefresh />
					</span>
				</button>
				{!confirmCoordinates && (
					<button
						className="rounded-md bg-indigo-600 p-2 text-gray-100 transition-all duration-200 hover:bg-indigo-700"
						type="button"
						data-testid="confirm-coordinates"
						onClick={handleConfirm}
					>
						Confirm Coordinates
					</button>
				)}
			</div>
		</div>
	);
};

export default MapCoordinates;
