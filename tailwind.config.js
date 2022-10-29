/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{js,jsx,ts,tsx}',
		'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		 screens: {
			sm: '481px',
			md: '768px',
			lg: '1025px',
		    xlg: '1200px'
		},
		extend: {},
	},
	plugins: [require('flowbite/plugin')],
};
