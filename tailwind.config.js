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
			},
			lineHeight: {
				"extra-loose": "3.5",
			},
			minHeight: {
				"1/2": "50%",
			},
			width: {
				345: "345px",
				285: "285px",
			},
			height: {
				414: "414px",
			},
		},
	},
	plugins: [],
};
