import { defineConfig } from 'vite';
import * as path from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import commonjs from '@rollup/plugin-commonjs';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import dts from 'vite-plugin-dts';
import pkg from './package.json' with { type: 'json' };
import terser from '@rollup/plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import vue from '@vitejs/plugin-vue';

import { viteStaticCopy } from 'vite-plugin-static-copy';


const scopedPackageName = pkg.name;
const packageName = scopedPackageName.split('/')[1];

const banner = `/**
 * @name ${scopedPackageName}
 * @version ${pkg.version}
 * @description ${pkg.description}
 * @author ${pkg.author}
 * @copyright Copyright ${new Date().getFullYear()}, WebDevNerdStuff
 * @homepage ${pkg.homepage}
 * @repository ${pkg.repository}
 * @license ${pkg.license} License
 */
`;

export default defineConfig({
	publicDir: false,
	build: {
		lib: {
			entry: './src/plugin/index.ts',
			name: packageName,
			formats: ['es', 'cjs'],
			fileName: format => `${packageName}.${format}.js`,
		},
		rollupOptions: {
			input: {
				main: path.resolve(import.meta.dirname, './src/plugin/index.ts')
			},
			external: [
				...Object.keys(pkg.dependencies || {}),
				/^vuetify($|\/.+)/,
			],
			output: {
				banner,
				exports: 'named',
			},
		},
	},
	plugins: [
		commonjs(),
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
		vue(),
		dts({
			tsconfigPath: 'tsconfig.build.json',
		}),
		typescript({
			check: true,
			include: ['./src/plugin/**/*.vue'],
			tsconfig: 'tsconfig.build.json',
		}),
		cssInjectedByJsPlugin({ topExecutionPriority: false }),
		viteStaticCopy({
			targets: [
				{
					src: 'src/plugin/styles/*',
					dest: 'scss',
					rename: { stripBase: true },
				},
			]
		}),
		terser(),
	],
	resolve: {
		alias: {
			'@': path.resolve(import.meta.dirname, './src'),
			'@root': path.resolve(import.meta.dirname, './')
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
});
