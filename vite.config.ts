import vue from '@vitejs/plugin-vue';
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';
import eslint from 'vite-plugin-eslint';
import stylelint from 'vite-plugin-stylelint';
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import AutoImport from 'unplugin-auto-import/vite';

const baseUrl = '/vue-code-block/';
const playgroundUrl = baseUrl + 'playground/';


export default defineConfig({
	base: baseUrl,
	build: {
		outDir: 'docs',
	},
	plugins: [
		eslint({
			fix: true,
		}),
		stylelint({
			cache: false,
			fix: true,
			include: [
				'src/**/*.{css,scss,sass,vue}',
				'./src/components/**/*.{css,scss,sass,vue}',
				'./src/plugin/styles/*.{css,scss,sass}'
			],
		}),
		AutoImport({
			dts: false,
			imports: [
				'vue',
				{
					vue: ['CSSProperties'],
				}
			],
			vueTemplate: true,
		}),
		vue({
			template: { transformAssetUrls },
		}),
		vuetify({
			autoImport: true,
		}),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
			'@root': fileURLToPath(new URL('.', import.meta.url)),
		},
		extensions: [
			'.js',
			'.json',
			'.jsx',
			'.mjs',
			'.mts',
			'.ts',
			'.tsx',
			'.vue',
		],
	},
	server: {
		hmr: {
			protocol: 'ws',
		},
		open: process?.env?.NODE_ENV === 'playground' ? playgroundUrl : false,
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
