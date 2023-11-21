import React from "react";
import Logo from "../Logo/Logo";
import { menuItems } from "./MenuItems";
import "./Menu.scss";
import { useMenu } from "../../contexts/MenuContext";
import MenuListItem from "./MenuListItem";

const Menu: React.FC = () => {
	const { isMenuOpen } = useMenu();

	return (
		<aside className={isMenuOpen ? "menu menu--open" : "menu"}>
			<Logo />
			<ul className="menu__list">
				{menuItems.map((item, index) => (
					<MenuListItem
						index={index}
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
