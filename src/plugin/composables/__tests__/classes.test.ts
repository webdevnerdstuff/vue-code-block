import { describe, it, expect, test } from 'vitest';
import { ref } from 'vue';
import {
	useCodeBlockClasses,
	useCopyButtonClasses,
	useIconClasses,
	useLabelClasses,
	useTabClasses,
} from '../classes';
import {
	CopyStatus,
	Props,
	UseTheme,
} from '../../types';
import { AllProps } from '../../utils/props';
import { pluginName } from '../../utils/globals';


const defaultProps: Props = { ...AllProps };
const defaultTheme = defaultProps.theme as UseTheme;


describe('Classes Composable', () => {
	describe('useCodeBlockClasses', () => {
		const isMobile = ref(false);
		const isMobileClass = `${pluginName}--mobile`;
		const isPrism = ref(false);
		const isPrismClass = `${pluginName}--prismjs`;
		let classes = useCodeBlockClasses({ isMobile, isPrism });

		it('should return the codeblock class defaults', () => {
			expect(classes).toMatchSnapshot();
		});

		test('mobile classes', () => {
			isMobile.value = true;

			classes = useCodeBlockClasses({ isMobile, isPrism });
			expect(classes[isMobileClass]).toBeTruthy();

			isMobile.value = false;
			classes = useCodeBlockClasses({ isMobile, isPrism });
			expect(classes[isMobileClass]).toBeFalsy();
		});

		test('prismjs classes', () => {
			isPrism.value = true;

			classes = useCodeBlockClasses({ isMobile, isPrism });
			expect(classes[isPrismClass]).toBeTruthy();

			isPrism.value = false;
			classes = useCodeBlockClasses({ isMobile, isPrism });
			expect(classes[isPrismClass]).toBeFalsy();
		});
	});

	describe('useCopyButtonClasses', () => {
		const copyStatus = ref<CopyStatus>('copy');
		const copyStatusClassPrefix = `${pluginName}--code-copy-button-status`;
		const isMobile = ref(false);
		const isMobileClass = `${pluginName}--code-copy-button-mobile`;
		const persistentCopyButton = ref(defaultProps.persistentCopyButton);
		const persistentCopyButtonCLass = `${pluginName}--code-copy-button-persist`;

		let classes = useCopyButtonClasses({ copyStatus, isMobile, persistentCopyButton });

		it('should return copy button class defaults', () => {
			expect(classes).toMatchSnapshot();
		});

		test('copy status classes', () => {
			classes = useCopyButtonClasses({ copyStatus, isMobile, persistentCopyButton });
			expect(classes[`${copyStatusClassPrefix}-copy`]).toBeTruthy();

			copyStatus.value = 'success';
			classes = useCopyButtonClasses({ copyStatus, isMobile, persistentCopyButton });
			expect(classes[`${copyStatusClassPrefix}-success`]).toBeTruthy();

			copyStatus.value = 'failed';
			classes = useCopyButtonClasses({ copyStatus, isMobile, persistentCopyButton });
			expect(classes[`${copyStatusClassPrefix}-failed`]).toMatchInlineSnapshot(`true`);
		});

		test('mobile classes', () => {
			isMobile.value = true;
			classes = useCopyButtonClasses({ copyStatus, isMobile, persistentCopyButton });
			expect(classes[isMobileClass]).toBeTruthy();

			isMobile.value = false;
			classes = useCopyButtonClasses({ copyStatus, isMobile, persistentCopyButton });
			expect(classes[isMobileClass]).toBeFalsy();
		});

		test('persistent copy button classes', () => {
			persistentCopyButton.value = true;
			classes = useCopyButtonClasses({ copyStatus, isMobile, persistentCopyButton });
			expect(classes[persistentCopyButtonCLass]).toBeTruthy();

			persistentCopyButton.value = false;
			classes = useCopyButtonClasses({ copyStatus, isMobile, persistentCopyButton });
			expect(classes[persistentCopyButtonCLass]).toBeFalsy();
		});
	});

	describe('useIconClasses', () => {
		const copyStatus = ref<CopyStatus>('copy');
		const highlightjs = ref(defaultProps.highlightjs);
		const highlightjsStatusClassPrefix = `${pluginName}--tab-highlightjs-${defaultTheme}-icon-status`;
		const prismCopyStatusClassPrefix = `${pluginName}--tab-prism-${defaultTheme}-icon-status`;
		const prismjsClass = `${pluginName}--tab-prism-neon-bunny-icon`;
		const highlightjsClass = `${pluginName}--tab-highlightjs-neon-bunny-icon`;

		let classes = useIconClasses({ copyStatus, highlightjs, useTheme: defaultTheme });

		it('should return icon class defaults', () => {
			expect(classes).toMatchSnapshot();
		});

		test('highlightjs class', () => {
			highlightjs.value = true;
			classes = useIconClasses({ copyStatus, highlightjs, useTheme: defaultTheme });
			expect(classes[highlightjsClass]).toBeTruthy();

			highlightjs.value = false;
			classes = useIconClasses({ copyStatus, highlightjs, useTheme: defaultTheme });
			expect(classes[highlightjsClass]).toBeFalsy();
		});

		test('prismjs class', () => {
			classes = useIconClasses({ copyStatus, highlightjs, useTheme: defaultTheme });
			expect(classes[prismjsClass]).toBeTruthy();

			highlightjs.value = true;
			classes = useIconClasses({ copyStatus, highlightjs, useTheme: defaultTheme });
			expect(classes[prismjsClass]).toBeFalsy();
		});

		test('copy status classes for prismjs', () => {
			highlightjs.value = false;
			classes = useIconClasses({ copyStatus, highlightjs, useTheme: defaultTheme });
			expect(classes[`${prismCopyStatusClassPrefix}-copy`]).toBeTruthy();

			copyStatus.value = 'success';
			classes = useIconClasses({ copyStatus, highlightjs, useTheme: defaultTheme });
			expect(classes[`${prismCopyStatusClassPrefix}-success`]).toBeTruthy();

			copyStatus.value = 'failed';
			classes = useIconClasses({ copyStatus, highlightjs, useTheme: defaultTheme });
			expect(classes[`${prismCopyStatusClassPrefix}-failed`]).toBeTruthy();
		});

		test('copy status classes for highlightjs', () => {
			highlightjs.value = true;
			copyStatus.value = 'copy';
			classes = useIconClasses({ copyStatus, highlightjs, useTheme: defaultTheme });
			expect(classes[`${highlightjsStatusClassPrefix}-copy`]).toBeTruthy();

			copyStatus.value = 'success';
			classes = useIconClasses({ copyStatus, highlightjs, useTheme: defaultTheme });
			expect(classes[`${highlightjsStatusClassPrefix}-success`]).toBeTruthy();

			copyStatus.value = 'failed';
			classes = useIconClasses({ copyStatus, highlightjs, useTheme: defaultTheme });
			expect(classes[`${highlightjsStatusClassPrefix}-failed`]).toBeTruthy();
		});
	});

	describe('useLabelClasses', () => {
		const isMobile = ref<boolean>(false);
		const mobileClass = `${pluginName}--label-mobile`;

		let classes = useLabelClasses({ isMobile });

		it('should return icon class defaults', () => {
			expect(classes).toMatchSnapshot();
		});

		test('mobile classes', () => {
			classes = useLabelClasses({ isMobile });
			expect(classes[mobileClass]).toBeFalsy();

			isMobile.value = true;
			classes = useLabelClasses({ isMobile });
			expect(classes[mobileClass]).toBeTruthy();
		});
	});

	describe('useTabClasses', () => {
		const highlightjs = ref(defaultProps.highlightjs);
		const tabClassPrefix = `${pluginName}--tab`;

		let classes = useTabClasses({ highlightjs, useTheme: defaultTheme });

		it('should return icon class defaults', () => {
			expect(classes).toMatchSnapshot();
		});

		test('highlightjs classes', () => {
			classes = useTabClasses({ highlightjs, useTheme: defaultTheme });
			expect(classes[`${tabClassPrefix}-highlightjs-${defaultTheme}`]).toBeFalsy();

			highlightjs.value = true;
			classes = useTabClasses({ highlightjs, useTheme: defaultTheme });
			expect(classes[`${tabClassPrefix}-highlightjs-${defaultTheme}`]).toBeTruthy();
		});

		test('prismjs classes', () => {
			highlightjs.value = false;
			classes = useTabClasses({ highlightjs, useTheme: defaultTheme });
			expect(classes[`${tabClassPrefix}-prism-${defaultTheme}`]).toBeTruthy();

			highlightjs.value = true;
			classes = useTabClasses({ highlightjs, useTheme: defaultTheme });
			expect(classes[`${tabClassPrefix}-prism-${defaultTheme}`]).toBeFalsy();
		});
	});
});
