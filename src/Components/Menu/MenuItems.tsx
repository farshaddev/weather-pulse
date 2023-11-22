import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { BsTelegram } from "react-icons/bs";

export interface menuItemType {
	icon: React.ReactNode;
	className: string;
	text: string;
	href: string;
}

export const menuItems: menuItemType[] = [
	{
		icon: <BsTelegram />,
		className: "text-telegram-blue flex-none",
		text: "Telegram",
		href: "https://t.me/farshaddev",
	},
	{
		icon: <FaLinkedinIn />,
		className: "text-linkedin-blue flex-none",
		text: "Linkedin",
		href: "https://www.linkedin.com/in/farshaddevelopment",
	},
	{
		icon: <BsGithub />,
		className: "text-github-green flex-none",
		text: "GitHub",
		href: "https://github.com/farshaddev/weather-pulse",
	},
	{
		icon: <BiLogoGmail />,
		className: "text-gmail-red flex-none",
		text: "Gmail",
		href: "mailto:farshad.development@gmail.com",
	},
];
