import React from "react";
import { RiSunLine, RiMoonLine } from "react-icons/ri";
import { useTheme } from "../../hooks/ThemeContext";

const DarkLightSwitch: React.FC = () => {
	const { isDarkMode, toggleDarkMode } = useTheme();

	return (
		<div className={`flex items-center space-x-2`}>
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
