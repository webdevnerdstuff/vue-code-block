import { describe, it, expect } from 'vitest';
import { createRequire } from 'node:module';
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '../..');
const dist = resolve(root, 'dist');
const pkg = JSON.parse(readFileSync(resolve(root, 'package.json'), 'utf8'));
const expectedExports = ['VCodeBlock', 'codeBlockOptions', 'createVCodeBlock', 'default'];


describe('Shipped Package (dist)', () => {

	// -------------------------------------------------- Bundles //
	describe('Bundles', () => {
		it('should export the public API from the ES bundle', async () => {
			const esModule = await import(resolve(root, pkg.module));

			expect(Object.keys(esModule).sort()).toEqual(expectedExports);
			expect(typeof esModule.createVCodeBlock).toBe('function');
			expect(esModule.default).toBe(esModule.VCodeBlock);
		});

		it('should export the public API from the CJS bundle', () => {
			const require = createRequire(import.meta.url);
			const cjsModule = require(resolve(root, pkg.main));

			expect(Object.keys(cjsModule).sort()).toEqual(expectedExports);
			expect(typeof cjsModule.createVCodeBlock).toBe('function');
			expect(cjsModule.default).toBe(cjsModule.VCodeBlock);
		});
	});


	// -------------------------------------------------- Types //
	describe('Types', () => {
		const typesPath = resolve(root, pkg.types);

		it('should have the types entry from package.json', () => {
			expect(pkg.types).toBe('dist/plugin/types/index.d.ts');
			expect(existsSync(typesPath)).toBe(true);
		});

		it('should declare Props in the types entry instead of re-exporting a stub', () => {
			const types = readFileSync(typesPath, 'utf8');

			expect(types).toMatch(/export interface Props\s*\{/);
			expect(types).toMatch(/export interface PluginOptions/);
		});
	});


	// -------------------------------------------------- Styles //
	describe('Styles', () => {
		it('should copy the plugin styles directly into dist/scss', () => {
			const sourceFiles = readdirSync(resolve(root, 'src/plugin/styles')).sort();
			const scssDir = resolve(dist, 'scss');
			const distEntries = readdirSync(scssDir).sort();

			expect(sourceFiles).toEqual([
				'README.md',
				'cssVariables.css',
				'main.scss',
				'themeStyles.scss',
				'utilities.scss',
			]);
			expect(distEntries).toEqual(sourceFiles);
			distEntries.forEach((entry) => {
				expect(statSync(resolve(scssDir, entry)).isFile()).toBe(true);
			});
		});
	});
});
