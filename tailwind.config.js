import defaultTheme from 'tailwindcss/defaultTheme.js';
import colors from 'tailwindcss/colors.js';

export default {
	plugins: [],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Prompt', ...defaultTheme.fontFamily.sans],
			},
		},
		colors: {
			...colors,
			base: '#353941',
			tertiary: '#26282B',
			secondary: '#90B8F8',
			primary: '#5F85DB',
		},
	},
	content: ['./src/**/*.{html,js,svelte,ts}'],
	variants: {
		extend: {},
	},
	darkMode: 'media', // or 'media' or 'class'
};
