import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

// Checks the built package in dist/. Run after `vite build --config vite.build.config.mts`. //
export default defineConfig({
	test: {
		environment: 'node',
		include: ['tests/package/**/*.test.ts'],
		root: fileURLToPath(new URL('./', import.meta.url)),
	},
});
