import defaultTheme from 'tailwindcss/defaultTheme.js';

export default {
	plugins: [],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Prompt', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	content: ['./src/**/*.{html,js,svelte,ts}'],
	variants: {
		extend: {},
	},
};
