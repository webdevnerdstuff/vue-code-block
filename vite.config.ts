import vue from '@vitejs/plugin-vue';
import babel from 'vite-plugin-babel';
import eslint from 'vite-plugin-eslint';
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import StylelintPlugin from 'vite-plugin-stylelint';


export default defineConfig({
	base: '/vue3-code-block/',
	build: {
		outDir: 'docs',
	},
	plugins: [
		eslint({
			fix: true,
		}),
		babel(),
		StylelintPlugin({
			fix: true,
			include: ['src/**/*.{css,scss,sass,vue}'],
		}),
		vue(),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
		extensions: [
			'.js',
			'.json',
			'.jsx',
			'.mjs',
			'.ts',
			'.tsx',
			'.vue',
		],
	},
	server: {
		open: true,
	},
});

export const assetAttrsConfig: Record<string, string[]> = {
	link: ['href'],
	video: ['src', 'poster'],
	source: ['src', 'srcset'],
	img: ['src', 'srcset'],
	image: ['xlink:href', 'href'],
	use: ['xlink:href', 'href']
};
