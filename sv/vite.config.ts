import devtoolsJson from 'vite-plugin-devtools-json';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit(), devtoolsJson()],
	server: {
		allowedHosts: true,
		proxy: {
			'/api': 'http://127.0.0.1:8090',
			'/_': 'http://127.0.0.1:8090'
		}
	}
});
