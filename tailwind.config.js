/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"github-green": "#196127",
				"linkedin-blue": "#0077b5",
				"gmail-red": "#db4437",
				"telegram-blue": "#0088cc",
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
