import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */

export default {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			// see the 'Deployment configuration' section below
		}),
	},
};
