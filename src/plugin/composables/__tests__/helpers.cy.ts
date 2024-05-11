import { useConvertToUnit } from '../helpers';

describe('Helpers Composable', () => {
	describe('useConvertToUnit', () => {
		const testValue = 10;

		it('should return string with a default px unit', () => {
			const unit = useConvertToUnit({ str: String(testValue) });
			expect(unit).to.eq(`${testValue}px`);
		});

		it('should return number with a default px unit', () => {
			const unit = useConvertToUnit({ str: testValue });
			expect(unit).to.eq(`${testValue}px`);
		});

		it('should return string with a supplied unit', () => {
			const unit = useConvertToUnit({ str: String(testValue), unit: 'em' });
			expect(unit).to.eq(`${testValue}em`);
		});

		it('should return number with a supplied unit', () => {
			const unit = useConvertToUnit({ str: testValue, unit: 'em' });
			expect(unit).to.eq(`${testValue}em`);
		});

		it('should return undefined if str is null', () => {
			const unit = useConvertToUnit({ str: null });
			expect(unit).to.eq(undefined);
		});

		it('should return undefined if str is undefined', () => {
			const unit = useConvertToUnit({ str: undefined });
			expect(unit).to.eq(undefined);
		});

		it('should return undefined if str is empty', () => {
			const unit = useConvertToUnit({ str: '' });
			expect(unit).to.eq(undefined);
		});
	});
});
