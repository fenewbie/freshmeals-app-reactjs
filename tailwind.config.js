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
			xl: '1280px'
		},
		extend: {
			colors: {
				greenBtn: '#80B500',
			},
			keyframes: {
				fadeOut: {
					'0%': { transform: 'translateY(50%)', opacity: '0' },
					'100%': { transform: 'translateY(-50%)', opacity: '1' },
				},
			},
		},
	},
	plugins: [require('flowbite/plugin')],
};
