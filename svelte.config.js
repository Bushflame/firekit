import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';
//import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({ stylus: true, pug: true }),

	kit: {
		env: {
			dir: './'
		},

		adapter: adapter(),
		alias: {
			$comps: './src/lib/components',
			$blocks: './src/lib/building-blocks',
			$views: '.src/lib/building-views',
			$frames: './src/lib/frames',
			$stylus: './src/lib/stylus'
		}
	}
};
export default config;
