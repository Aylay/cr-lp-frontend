/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			transparent: 'transparent',
			white: '#FFF',
			black: '#000',
			porcelain: '#E3E7EA',
			geyser: '#CFD7E1',
			'regent-gray': '#8E9BAA',
			'slate-gray': '#738293',
			crimson: '#C6142F'
		},
		fontFamily: {
			base: 'Inter, Arial, sans-serif',
			highlight: 'Merriweather, Arial, sans-serif'
		},
		extend: {}
	},
	plugins: [require('tailwindcss-animated')]
};
