import React from "react";
import { useMenu } from "../../Contexts/MenuContext";

const ToggleMenuBtn: React.FC = () => {
	const { isMenuOpen, toggleMenu } = useMenu();

	const basicToggleMenuLineClasses =
		"block h-0.5 w-full rounded-full bg-gray-800 dark:bg-slate-100 transition-all duration-100";

	const openToggleMenuLineClasses =
		"first:rotate-45 first:translate-y-1.5 [&:nth-child(2)]:opacity-0 last:-rotate-45 last:-translate-y-1.5";

	const toggleMenuLineClasses = isMenuOpen
		? basicToggleMenuLineClasses + " " + openToggleMenuLineClasses
		: basicToggleMenuLineClasses;

	return (
		<button
			type="button"
			data-testid="toggle-menu-btn"
			onClick={toggleMenu}
			className={
				"flex w-8 cursor-pointer flex-col justify-center gap-1 rounded-md border-0 bg-gray-300 p-2 dark:bg-gray-600"
			}
		>
			<span className={toggleMenuLineClasses}></span>
			<span className={toggleMenuLineClasses}></span>
			<span className={toggleMenuLineClasses}></span>
		</button>
	);
};

export default ToggleMenuBtn;
