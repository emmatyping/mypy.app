import vercel from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';
import { withSentryConfig } from '@sentry/svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		sourceMap: true,
		postcss: true
	}),
	compilerOptions: {
		enableSourcemap: true
	},
	kit: {
		adapter: vercel({
			runtime: "node24.x"
		})
	}
};

export default withSentryConfig(config);
