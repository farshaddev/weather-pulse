/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				socials: {
					"github-green": "#196127",
					"linkedin-blue": "#0077b5",
					"gmail-red": "#db4437",
					"telegram-blue": "#0088cc",
				},
				// dark: {
				// 	bg: "#1e1f24",
				// 	text: "#f8f8f8",
				// 	primary: " #1976D2",
				// },
				// light: {
				// 	bg: "#f8f8f8",
				// 	text: "#1e1f24",
				// 	primary: "#1976D2",
				// },
			},
			lineHeight: {
				"extra-loose": "3.5",
			},
			width: {
				345: "345px",
				285: "285px",
			},
		},
	},
	plugins: [],
};
