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
				raj: ['Rajdhani', 'sans-serif'],
			},
			backgroundImage: {
				'hero-image':
					"url('https://images.unsplash.com/photo-1513223945279-4bf9e7049c9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2092&q=80')",
			},
		},
		plugins: [require('flowbite/plugin')],
	},
};
