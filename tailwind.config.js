/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				main_violet: '#7b2cbf',
				dark_violet: '#5a189a',
				gray_blue: '#7DA0BA',
			},
			outline: {
				red: '1px solid #B91C1C',
			},
		},
	},
	plugins: [],
};
