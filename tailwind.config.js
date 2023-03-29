/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
		},
		extend: {
			boxShadow: {
				card: '0 0px 5px 1px rgba(0, 0, 0, 0.1)',
			},
			colors: {
				greenBtn: '#80B500',
				sectionBg: '#F7F5EB',
			},
			keyframes: {
				accordionAppear: {
					'0%': {
						maxHeight: '0px',
					},
					'100%': {
						maxHeight: '1000px',
					},
				},
				pullRight: {
					'0%': { width: '0%' },
					'100%': { width: '100%' },
				},
				modalAppear: {
					'0%': {
						transform: 'translateY(-10%)',
						opacity: 0,
					},
					'100%': {
						transform: 'translateY(0%)',
						opacity: 1,
					},
				},
				overlayApper: {
					'0%': {
						opacity: 0,
					},
					'100%': {
						opacity: 1,
					},
				},

				bannerTextAppear: {
					'0%': {
						opacity: 0,
						transform: 'translateY(70%)',
					},
					'100%': {
						opacity: 1,
						transform: 'translateY(0%)',
					},
				},
				animate: {
					'0%': {
						transform: 'translateX(0)',
					},

					'100%': {
						transform: 'translateX(30px)',
					},
				},
				jump: {
					'0%': {
						transform: 'translate(0, 0)',
					},
					'10%': {
						transform: 'translate(10px, -10px)',
					},
					' 20%': {
						transform: 'translate(20px, 10px)',
					},
					' 30%': {
						transform: 'translate(30px, -50px)',
					},
					'70%': {
						transform: 'translate(-150px, -50px)',
					},
					'80%': {
						transform: 'translate(-140px, 10px)',
					},
					'90%': {
						transform: 'translate(-130px, -10px)',
					},
					'100%': {
						transform: 'translate(-120px, 0)',
					},
				},
				toastEnter: {
					'0%': {
						opacity: 0,
						transform: 'translateX(110%)',
					},
					'100%': {
						opacity: 1,
						transform: 'translateX(0%)',
					},
				},
				toastLeave: {
					'0%': {
						opacity: 1,
						transform: 'translateX(0%)',
					},
					'100%': {
						opacity: 0,
						transform: 'translateX(110%)',
					},
				},
			},
			animation: {
				animate: 'animate 0.8s linear infinite',
				jump: ' jump 0.8s ease-in-out infinite',
				toastEnter: 'toastEnter 0.5s linear forwards',
				toastLeave: 'toastLeave 0.5s linear forwards',
			},

			fontFamily: {
				raj: ['Rajdhani', 'sans-serif'],
			},
			backgroundImage: {
				'hero-image':
					"linear-gradient(to right bottom, rgba(33,34,69,0.8), rgba(33,34,69,0.8)), url('https://images.unsplash.com/photo-1513223945279-4bf9e7049c9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2092&q=80')",
				'coming-soon':
					"linear-gradient(to right bottom, rgba(33,34,69,0.8), rgba(33,34,69,0.8)), url('https://images.unsplash.com/photo-1514361892635-6b07e31e75f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
			},
		},
	},
};
