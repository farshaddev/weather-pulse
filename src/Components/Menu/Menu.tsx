import React from "react";
import Logo from "../Logo/Logo";
import { menuItems } from "./MenuItems";
import { useMenu } from "../../Contexts/MenuContext";
import MenuListItem from "./MenuListItem";

const Menu: React.FC = () => {
	const { isMenuOpen } = useMenu();

	const openMenuClasses = "w-285 sm:w-345 opacity-100";
	const closeMenuClasses = "w-0 opacity-0";
	const menuClasses = `block h-screen overflow-y-auto border-r border-gray-300 bg-white dark:bg-slate-900 dark:text-white dark:border-gray-900 fixed left-0 top-0 z-10 transition-all duration-300 ease-in ${
		isMenuOpen ? openMenuClasses : closeMenuClasses
	}`;

	return (
		<aside className={menuClasses}>
			<Logo />
			<ul className="list-none p-0">
				{menuItems.map((item, index) => (
					<MenuListItem
						key={`${item.text}-${index}`}
						text={item.text}
						icon={item.icon}
						href={item.href}
						className={item.className}
					/>
				))}
			</ul>
		</aside>
	);
};

export default Menu;
