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
			lg: '1024px',
			xl: '1280px',
		},
		extend: {
			colors: {
				greenBtn: '#80B500',
			},
			keyframes: {
				pullRight: {
					'0%': { width: '0%' },
					'100%': { width: '100%' },
				},
			},
			fontFamily: {
				raj: ['Rajdhani', 'sans-serif']
			},
		},
		plugins: [require('flowbite/plugin')],
	},
};
