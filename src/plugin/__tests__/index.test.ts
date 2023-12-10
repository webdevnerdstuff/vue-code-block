import { describe, it, expect } from 'vitest';
import { createVCodeBlock } from '../';


describe('Plugin Index', () => {
	describe('install', () => {
		it('should return install function', () => {
			const VCodeBlock = createVCodeBlock();

			expect('install' in VCodeBlock).toBe(true);
		});
	});
});
