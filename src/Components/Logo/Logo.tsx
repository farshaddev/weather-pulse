import React from "react";
import { IoMdPulse } from "react-icons/io";
import "./Logo.scss";

const Logo: React.FC = () => {
	return (
		<div className="logo">
			<IoMdPulse data-testid="logo-icon" className="logo__icon" />
			<span className="logo__text">Weather Pulse</span>
		</div>
	);
};

export default Logo;
