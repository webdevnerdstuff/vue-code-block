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
import { AllProps } from '../../utils/props';


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

		// TODO (fix): The border radius is not set correctly if using multiple units with tabs //
		it('should return the set radius', () => {
			expect(
				usePreTagStyles({ copyTab, height, maxHeight, radius: '0 1em', runTab, tabs: true, useTheme: defaultTheme })
			).toMatchInlineSnapshot(`
				{
				  "borderRadius": "0 1em 0 0 1em 0 1em !important",
				  "display": "flex",
				  "height": "auto",
				  "maxHeight": "auto",
				  "overflow": "auto",
				}
			`);
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
