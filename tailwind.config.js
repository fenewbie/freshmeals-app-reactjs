/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{js,jsx,ts,tsx}',
		'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		 screens: {
		      sm: '480px',
		      md: '768px',
		      lg: '1200px',
		},
		extend: {},
	},
	plugins: [require('flowbite/plugin')],
};
