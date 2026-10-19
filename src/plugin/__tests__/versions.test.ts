import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '../../..');
const componentSource = readFileSync(resolve(import.meta.dirname, '../VCodeBlock.vue'), 'utf8');

function componentVersion(name: string): string | undefined {
	return componentSource.match(new RegExp(`const ${name} = '([^']+)';`))?.[1];
}

function installedVersion(packageName: string): string {
	const packageJson = readFileSync(resolve(root, 'node_modules', packageName, 'package.json'), 'utf8');

	return JSON.parse(packageJson).version;
}

describe('CDN Versions', () => {
	it('should match highlightJsVersion to the installed highlight.js version', () => {
		expect(componentVersion('highlightJsVersion')).toBe(installedVersion('highlight.js'));
	});

	it('should match prismVersion to the installed prismjs version', () => {
		expect(componentVersion('prismVersion')).toBe(installedVersion('prismjs'));
	});
});
