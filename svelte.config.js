import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter(),
		csp: {
			mode: 'hash',
			directives: {
				'default-src': ["'self'"],
				'script-src': ["'self'"],
				'style-src': ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com', 'https://fonts.cdnfonts.com'],
				'img-src': ["'self'", 'https:', 'data:'],
				'font-src': ["'self'", 'https://fonts.gstatic.com', 'https://fonts.cdnfonts.com'],
				'connect-src': ["'self'", 'https://fonts.googleapis.com', 'https://fonts.gstatic.com', 'https://fonts.cdnfonts.com', 'https://corsproxy.io', 'https://api.rss2json.com'],
				'frame-src': ["'self'", 'https://www.youtube.com'],
				'object-src': ["'none'"],
				'base-uri': ["'self'"],
				'form-action': ["'self'"],
				'frame-ancestors': ["'none'"],
				'upgrade-insecure-requests': true
			}
		}
	}
};

export default config;
