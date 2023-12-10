import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { BsTelegram } from "react-icons/bs";
import { FaEarthAsia } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";

export interface menuItemType {
	icon: React.ReactNode;
	className: string;
	text: string;
	href: string;
}

export const menuItems: menuItemType[] = [
	{
		icon: <RiWhatsappFill />,
		className: "dark:text-slate-300 flex-none",
		text: "WhatsApp",
		href: "https://wa.me/+989350696255",
	},
	{
		icon: <BsTelegram />,
		className: "text-socials-telegram-blue dark:text-slate-300 flex-none",
		text: "Telegram",
		href: "https://t.me/farshaddev",
	},
	{
		icon: <FaLinkedinIn />,
		className: "text-socials-linkedin-blue dark:text-slate-300 flex-none",
		text: "Linkedin",
		href: "https://www.linkedin.com/in/farshaddevelopment",
	},
	{
		icon: <BsGithub />,
		className: "text-socials-github-green dark:text-slate-300 flex-none",
		text: "GitHub",
		href: "https://github.com/farshaddev/weather-pulse",
	},
	{
		icon: <BiLogoGmail />,
		className: "text-socials-gmail-red dark:text-slate-300 flex-none",
		text: "Gmail",
		href: "mailto:farshad.development@gmail.com",
	},
	{
		icon: <FaEarthAsia />,
		className: "dark:text-slate-300 flex-none",
		text: "farshaddarvishi.com",
		href: "https://farshaddarvishi.com",
	},
];
