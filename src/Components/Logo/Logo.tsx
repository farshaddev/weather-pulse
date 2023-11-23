import React from "react";
import { IoMdPulse } from "react-icons/io";

const Logo: React.FC = () => {
	return (
		<div className="mb-4 flex items-center gap-2 p-5 text-2xl font-bold">
			<IoMdPulse className="text-2xl text-indigo-500" />
			<span className="whitespace-nowrap text-gray-700 dark:text-white">
				Weather Pulse
			</span>
		</div>
	);
};

export default Logo;
