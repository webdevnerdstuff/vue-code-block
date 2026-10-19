import { describe, it, expect } from 'vitest';
import { ref } from 'vue';
import {
	useCodeTagStyles,
	useHeaderStyles,
	usePreTagStyles,
	useTabGroupStyles,
} from '../styles';
import {
	Props,
	UseTheme,
} from '../../types';
import { AllProps } from '../../data/props';


const defaultProps: Props = { ...AllProps };
const defaultTheme = defaultProps.theme as UseTheme;


describe('Styles Composable', () => {
	describe('useCodeTagStyles', () => {
		const theme = ref('coy');

		it('should return the code tag style defaults', () => {
			expect(
				useCodeTagStyles({ isLoading: false, useTheme: theme })
			).toMatchSnapshot();
		});

		it('should return the code tag style defaults if loading', () => {
			expect(
				useCodeTagStyles({ isLoading: true, useTheme: theme })
			).toMatchSnapshot();
		});
	});

	describe('useHeaderStyles', () => {
		// ? Default floatingTabs value is true
		const floatingTabs = ref(defaultProps.floatingTabs);
		const tabGap = ref(defaultProps.tabGap);

		it('should return the header style defaults', () => {
			expect(
				useHeaderStyles({ floatingTabs, tabGap })
			).toMatchSnapshot();
		});

		it('should return the header style with floatingTabs as false', () => {
			expect(
				useHeaderStyles({ floatingTabs: false, tabGap })
			).toMatchSnapshot();
		});

		it('should return gap as undefined', () => {
			expect(
				useHeaderStyles({ floatingTabs: false, tabGap: '' })
			).toMatchSnapshot();
		});

		it('should return tabGap as 0px', () => {
			expect(
				useHeaderStyles({ floatingTabs: false, tabGap: undefined })
			).toMatchSnapshot();

			expect(
				useHeaderStyles({ floatingTabs: false, tabGap: '' })
			).toMatchSnapshot();
		});
	});

	describe('usePreTagStyles', () => {
		// ? Default floatingTabs value is true
		const copyTab = ref(defaultProps.copyTab);
		const height = ref(defaultProps.height);
		const maxHeight = ref(defaultProps.maxHeight);
		const radius = ref(defaultProps.codeBlockRadius);
		const runTab = ref(defaultProps.runTab);
		const tabs = ref(defaultProps.tabs);

		it('should return the pre tag style defaults', () => {
			expect(
				usePreTagStyles({ copyTab, height, maxHeight, radius, runTab, tabs, useTheme: defaultTheme })
			).toMatchSnapshot();
		});

		it('should return the set radius if no tabs', () => {
			expect(
				usePreTagStyles({ copyTab, height, maxHeight, radius, runTab, tabs, useTheme: defaultTheme })
			).toMatchSnapshot();
		});

		it('should return the set radius with tabs', () => {
			expect(
				usePreTagStyles({ copyTab, height, maxHeight, radius, runTab, tabs: true, useTheme: defaultTheme })
			).toMatchSnapshot();
		});

		describe('border radius', () => {
			const getRadius = (value: string | undefined, withTabs: boolean) => usePreTagStyles({
				copyTab: true,
				height,
				maxHeight,
				radius: value,
				runTab: false,
				tabs: withTabs,
				useTheme: defaultTheme,
			}).borderRadius;

			it.each([
				['0.5rem', '0.5rem 0 0.5rem 0.5rem !important'],
				['0 1em', '0 0 0 1em !important'],
				['1px 2px 3px', '1px 0 3px 2px !important'],
				['8px 4px 2px 1px', '8px 0 2px 1px !important'],
				['10px 5px / 20px', '10px 0 10px 5px / 20px 0 20px 20px !important'],
				['8', '8px 0 8px 8px !important'],
				['  0   1em  ', '0 0 0 1em !important'],
			])('should square only the top right corner with tabs (%s)', (value, expected) => {
				expect(getRadius(value, true)).toBe(expected);
			});

			it.each([
				['0.5rem', '0.5rem'],
				['0 1em', '0 1em'],
				['8px 4px 2px 1px', '8px 4px 2px 1px'],
				['10px 5px / 20px', '10px 5px / 20px'],
				['8', '8px'],
			])('should keep the radius without tabs (%s)', (value, expected) => {
				expect(getRadius(value, false)).toBe(expected);
			});

			it('should keep the radius when tabs are on but there is no copy or run tab', () => {
				expect(usePreTagStyles({
					copyTab: false,
					height,
					maxHeight,
					radius: '0 1em',
					runTab: false,
					tabs: true,
					useTheme: defaultTheme,
				}).borderRadius).toBe('0 1em');
			});

			it('should square the top right corner with only a run tab', () => {
				expect(usePreTagStyles({
					copyTab: false,
					height,
					maxHeight,
					radius: '0 1em',
					runTab: true,
					tabs: true,
					useTheme: defaultTheme,
				}).borderRadius).toBe('0 0 0 1em !important');
			});

			it('should not set a radius when the value is empty', () => {
				expect(getRadius('', true)).toBeUndefined();
				expect(getRadius(undefined, false)).toBeUndefined();
			});

			it('should leave a value with more than four corners unchanged', () => {
				expect(getRadius('1px 2px 3px 4px 5px', true)).toBe('1px 2px 3px 4px 5px !important');
			});
		});

	});

	describe('useTabGroupStyles', () => {
		const tabGap = ref(defaultProps.tabGap);

		it('should return the tab group style defaults', () => {
			expect(
				useTabGroupStyles({ tabGap })
			).toMatchSnapshot();
		});

		it('should return tabGap as 0px', () => {
			expect(
				useTabGroupStyles({ tabGap: undefined })
			).toMatchSnapshot();

			expect(
				useTabGroupStyles({ tabGap: '' })
			).toMatchSnapshot();
		});
	});

});
