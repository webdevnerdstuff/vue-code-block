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
			).to.deep.equal({
				"padding": "1em",
				"width": "100%",
			});
		});

		it('should return the code tag style defaults if loading', () => {
			expect(
				useCodeTagStyles({ isLoading: true, useTheme: theme })
			).to.deep.equal({
				"padding": "1em",
				"width": "",
			});
		});
	});

	describe('useHeaderStyles', () => {
		// ? Default floatingTabs value is true
		const floatingTabs = ref(defaultProps.floatingTabs);
		const tabGap = ref(defaultProps.tabGap);

		it('should return the header style defaults', () => {
			expect(
				useHeaderStyles({ floatingTabs, tabGap })
			).to.deep.equal({
				"bottom": "1px",
				"gap": "0.25rem",
			});
		});

		it('should return the header style with floatingTabs as false', () => {
			expect(
				useHeaderStyles({ floatingTabs: false, tabGap })
			).to.deep.equal({
				"bottom": "0",
				"gap": "0.25rem",
			});
		});

		it('should return gap as undefined', () => {
			expect(
				useHeaderStyles({ floatingTabs: false, tabGap: '' })
			).to.deep.equal({
				"bottom": "0",
				"gap": "0px",
			});
		});

		it('should return tabGap as 0px', () => {
			expect(
				useHeaderStyles({ floatingTabs: false, tabGap: undefined })
			).to.deep.equal({
				"bottom": "0",
				"gap": "0px",
			});

			expect(
				useHeaderStyles({ floatingTabs: false, tabGap: '' })
			).to.deep.equal({
				"bottom": "0",
				"gap": "0px",
			});
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
			).to.deep.equal({
				"borderRadius": "0.5rem",
				"display": "flex",
				"height": "auto",
				"maxHeight": "auto",
				"overflow": "auto",
			});
		});

		it('should return the set radius if no tabs', () => {
			expect(
				usePreTagStyles({ copyTab, height, maxHeight, radius, runTab, tabs, useTheme: defaultTheme })
			).to.deep.equal({
				"borderRadius": "0.5rem",
				"display": "flex",
				"height": "auto",
				"maxHeight": "auto",
				"overflow": "auto",
			});
		});

		it('should return the set radius with tabs', () => {
			expect(
				usePreTagStyles({ copyTab, height, maxHeight, radius, runTab, tabs: true, useTheme: defaultTheme })
			).to.deep.equal({
				"borderRadius": "0.5rem 0 0.5rem 0.5rem !important",
				"display": "flex",
				"height": "auto",
				"maxHeight": "auto",
				"overflow": "auto",
			});
		});

		it('should return the set radius', () => {
			expect(
				usePreTagStyles({ copyTab, height, maxHeight, radius: '0 1em', runTab, tabs: true, useTheme: defaultTheme })
			).to.deep.equal({
				"borderRadius": "0 1em 0 0 1em 0 1em !important",
				"display": "flex",
				"height": "auto",
				"maxHeight": "auto",
				"overflow": "auto",
			});
		});

	});

	describe('useTabGroupStyles', () => {
		const tabGap = ref(defaultProps.tabGap);

		it('should return the tab group style defaults', () => {
			expect(
				useTabGroupStyles({ tabGap })
			).to.deep.equal({
				"gap": "0.25rem",
			});
		});

		it('should return tabGap as 0px', () => {
			expect(
				useTabGroupStyles({ tabGap: undefined })
			).to.deep.equal({
				"gap": "0px",
			});

			expect(
				useTabGroupStyles({ tabGap: '' })
			).to.deep.equal({
				"gap": "0px",
			});
		});
	});

});
