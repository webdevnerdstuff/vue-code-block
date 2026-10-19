// eslint.config.js
import eslint from '@eslint/js';
import wdnsConfig from '@wdns/eslint-config-wdns';
import tseslint from 'typescript-eslint';
import AutoImportJson from './.eslintrc-auto-import.json' with { type: 'json' };
import { defineConfig } from 'eslint/config';


export default defineConfig(
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	...wdnsConfig,
	{
		ignores: [
			'*__TEMP.*',
			'*__TEMP/',
			'src/playground/*',
			'src/playground/configs/templates/PlaygroundPage.vue',
			'vite.build.config.mts',
			'vite.config.mts',
			'vitest.config.mts',
		],
	},

	{
		name: 'app/files-to-ignore',
		ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
	},

	{
		name: 'app/files-to-lint',
		files: ['**/*.{ts,mts,tsx,vue}'],
		languageOptions: {
			...AutoImportJson,
			ecmaVersion: 'latest',
			sourceType: 'module',
			parserOptions: {
				parser: tseslint.parser,
				extraFileExtensions: ['.vue'],
				sourceType: 'module',
			},
		},
		plugins: {
			'typescript-eslint': tseslint.plugin,
		},
	},
);
