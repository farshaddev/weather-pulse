import React, { useState } from "react";
import { RiSunLine, RiMoonLine } from "react-icons/ri";

const DarkLightSwitch: React.FC = () => {
	const [isDarkMode, setDarkMode] = useState<boolean>(true);

	const toggleDarkMode = () => {
		setDarkMode((prevMode) => !prevMode);
	};

	return (
		<div
			className={`flex items-center space-x-2 ${
				isDarkMode ? "dark" : ""
			}`}
		>
			<button
				className="rounded-md bg-gray-300 p-2 dark:bg-gray-600"
				onClick={toggleDarkMode}
			>
				{isDarkMode ? <RiSunLine /> : <RiMoonLine />}
			</button>
		</div>
	);
};

export default DarkLightSwitch;
