import React from "react";

interface MenuListItemProps {
	text: string;
	icon: React.ReactNode;
	href: string;
	className: string;
}

const MenuListItem: React.FC<MenuListItemProps> = ({
	text,
	icon,
	href,
	className,
}) => {
	return (
		<li>
			<a
				className={`text-blue-500 hover:bg-gray-100 text-base no-underline sm:text-xl sm:leading-extra-loose leading-extra-loose flex items-center gap-2 px-8 transition-all duration-200 ease-in${
					className ? ` ${className}` : ""
				}`}
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
