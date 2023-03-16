import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import nodePolyfills from 'rollup-plugin-polyfill-node';
import pkg from './package.json';
import typescript from 'rollup-plugin-typescript2';
import vue from '@vitejs/plugin-vue';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import { fileURLToPath, URL } from 'node:url';
import scss from 'rollup-plugin-scss';
import postcss from 'rollup-plugin-postcss';
// import terser from '@rollup/plugin-terser';
import copy from 'rollup-plugin-copy';

const banner = `/**
 * @name ${pkg.name}
 * @version ${pkg.version}
 * @description ${pkg.description}
 * @author ${pkg.author}
 * @copyright Copyright ${new Date().getFullYear()}, WebDevNerdStuff
 * @homepage ${pkg.homepage}
 * @repository ${pkg.repository}
 * @license ${pkg.license} License
 */
`;

export default {
	input: 'src/index.ts',
	output: [
		{
			exports: 'named',
			file: `dist/${pkg.name}.js`,
			format: 'cjs',
			banner,
		},
		{
			exports: 'named',
			file: `dist/${pkg.name}.es.js`,
			format: 'es',
			banner,
		},
	],
	external: [
		...Object.keys(pkg.dependencies || {}),
		...Object.keys(pkg.peerDependencies || {}),
	],
	plugins: [
		json(),
		alias({
			resolve: ['.js', '.jsx', '.ts', '.tsx'],
			entries: [
				{
					find: '@',
					replacement: 'src',
				},
			]
		}),
		nodePolyfills(),
		nodeResolve({
			alias: {
				'@': fileURLToPath(new URL('./src', import.meta.url)),
			},
			browser: true,
			extensions: [
				'.js',
				'.json',
				'.jsx',
				'.mjs',
				'.ts',
				'.tsx',
				'.vue',
			],
		}),
		commonjs(),
		typescript(),
		vue({
			defaultLang: { script: 'ts' }
		}),
		postcss({
			modules: true,
			extract: true
		}),
		scss(),
		copy({
			targets: [
				{ src: 'src/plugin/themes', dest: 'dist' },
			]
		}),
	],
};
