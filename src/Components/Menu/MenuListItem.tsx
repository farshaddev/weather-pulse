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
				className={`flex items-center gap-2 px-8 text-base leading-extra-loose text-blue-500 no-underline transition-all duration-200 hover:bg-gray-100 dark:hover:bg-slate-800 sm:text-xl sm:leading-extra-loose ease-in${
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
