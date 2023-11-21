import React from "react";

interface MenuListItemProps {
	index: number;
	text: string;
	icon: React.ReactNode;
	href: string;
	className: string;
}

const MenuListItem: React.FC<MenuListItemProps> = ({
	index,
	text,
	icon,
	href,
	className,
}) => {
	return (
		<li key={index}>
			<a
				className={`menu__list-link${className ? ` ${className}` : ""}`}
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				data-testid={`${text}-link`}
			>
				{icon}
				<span data-testid={`${text}-text`}>{text}</span>
			</a>
		</li>
	);
};

export default MenuListItem;
