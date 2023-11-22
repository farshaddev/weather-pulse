import React from "react";
import { IoMdPulse } from "react-icons/io";

const Logo: React.FC = () => {
	return (
		<div className="flex items-center gap-2 text-2xl font-bold p-5 mb-4">
			<IoMdPulse className="text-blue-500 text-2xl" />
			<span className="whitespace-nowrap text-gray-700 dark:text-white">
				Weather Pulse
			</span>
		</div>
	);
};

export default Logo;
