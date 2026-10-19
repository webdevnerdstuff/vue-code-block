import { describe, it, expect } from 'vitest';
import { useConvertToUnit, useDeepMerge } from '../helpers';

describe('Helpers Composable', () => {
	describe('useConvertToUnit', () => {
		const testValue = 10;

		it('should return string with a default px unit', () => {
			const unit = useConvertToUnit({ str: String(testValue) });
			expect(unit).toBe(`${testValue}px`);
		});

		it('should return number with a default px unit', () => {
			const unit = useConvertToUnit({ str: testValue });
			expect(unit).toBe(`${testValue}px`);
		});

		it('should return string with a supplied unit', () => {
			const unit = useConvertToUnit({ str: String(testValue), unit: 'em' });
			expect(unit).toBe(`${testValue}em`);
		});

		it('should return number with a supplied unit', () => {
			const unit = useConvertToUnit({ str: testValue, unit: 'em' });
			expect(unit).toBe(`${testValue}em`);
		});

		it('should return undefined if str is null', () => {
			const unit = useConvertToUnit({ str: null });
			expect(unit).toBe(undefined);
		});

		it('should return undefined if str is undefined', () => {
			const unit = useConvertToUnit({ str: undefined });
			expect(unit).toBe(undefined);
		});

		it('should return undefined if str is empty', () => {
			const unit = useConvertToUnit({ str: '' });
			expect(unit).toBe(undefined);
		});
	});

	describe('useDeepMerge', () => {
		it('should return the target when there are no sources', () => {
			const target = { a: 1 };

			expect(useDeepMerge(target)).toBe(target);
		});

		it('should merge into and return the target', () => {
			const target = { a: 1 };
			const merged = useDeepMerge(target, { b: 2 });

			expect(merged).toBe(target);
			expect(merged).toEqual({ a: 1, b: 2 });
		});

		it('should merge nested objects', () => {
			const merged = useDeepMerge(
				{ a: { b: 1, c: { d: 1 } } },
				{ a: { c: { e: 2 }, f: 3 } },
			);

			expect(merged).toEqual({ a: { b: 1, c: { d: 1, e: 2 }, f: 3 } });
		});

		it('should not share nested objects with the source', () => {
			const source = { a: { b: 1 } };
			const merged = useDeepMerge({}, source) as typeof source;

			merged.a.b = 2;

			expect(source.a.b).toBe(1);
		});

		it('should merge multiple sources with later sources winning', () => {
			const merged = useDeepMerge({}, { a: 1, b: 1 }, { b: 2, c: 2 }, { c: 3 });

			expect(merged).toEqual({ a: 1, b: 2, c: 3 });
		});

		it('should replace arrays instead of merging them', () => {
			const merged = useDeepMerge({ list: [1, 2, 3] }, { list: [4] });

			expect(merged).toEqual({ list: [4] });
		});

		it('should overwrite a value with undefined from a source', () => {
			const merged = useDeepMerge({ a: 1, b: 2 }, { a: undefined });

			expect(merged).toEqual({ a: undefined, b: 2 });
			expect('a' in merged).toBe(true);
		});

		it('should skip undefined sources', () => {
			const merged = useDeepMerge({ a: 1 }, undefined as unknown as object, { b: 2 });

			expect(merged).toEqual({ a: 1, b: 2 });
		});
	});
});
