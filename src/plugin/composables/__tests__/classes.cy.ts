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
      expect(classes).to.deep.equal({
        "v-code-block": true,
        "v-code-block--highlightjs": true,
        "v-code-block--mobile": false,
        "v-code-block--prismjs": false,
        "v-code-block-mb-5": true,
      });
    });

    it('mobile classes', () => {
      isMobile.value = true;

      classes = useCodeBlockClasses({ isMobile, isPrism });
      expect(classes[isMobileClass]).to.be.true;

      isMobile.value = false;
      classes = useCodeBlockClasses({ isMobile, isPrism });
      expect(classes[isMobileClass]).to.be.false;
    });

    it('prismjs classes', () => {
      isPrism.value = true;

      classes = useCodeBlockClasses({ isMobile, isPrism });
      expect(classes[isPrismClass]).to.be.true;

      isPrism.value = false;
      classes = useCodeBlockClasses({ isMobile, isPrism });
      expect(classes[isPrismClass]).to.be.false;
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
      expect(classes).to.deep.equal({
        "v-code-block--code-copy-button": true,
        "v-code-block--code-copy-button-mobile": false,
        "v-code-block--code-copy-button-persist": false,
        "v-code-block--code-copy-button-status-copy": true,
      });
    });

    it('copy status classes', () => {
      classes = useCopyButtonClasses({ copyStatus, isMobile, persistentCopyButton });
      expect(classes[`${copyStatusClassPrefix}-copy`]).to.be.true;

      copyStatus.value = 'success';
      classes = useCopyButtonClasses({ copyStatus, isMobile, persistentCopyButton });
      expect(classes[`${copyStatusClassPrefix}-success`]).to.be.true;

      copyStatus.value = 'failed';
      classes = useCopyButtonClasses({ copyStatus, isMobile, persistentCopyButton });
      expect(classes[`${copyStatusClassPrefix}-failed`]).to.be.true;
    });

    it('mobile classes', () => {
      isMobile.value = true;
      classes = useCopyButtonClasses({ copyStatus, isMobile, persistentCopyButton });
      expect(classes[isMobileClass]).to.be.true;

      isMobile.value = false;
      classes = useCopyButtonClasses({ copyStatus, isMobile, persistentCopyButton });
      expect(classes[isMobileClass]).to.be.false;
    });

    it('persistent copy button classes', () => {
      persistentCopyButton.value = true;
      classes = useCopyButtonClasses({ copyStatus, isMobile, persistentCopyButton });
      expect(classes[persistentCopyButtonCLass]).to.be.true;

      persistentCopyButton.value = false;
      classes = useCopyButtonClasses({ copyStatus, isMobile, persistentCopyButton });
      expect(classes[persistentCopyButtonCLass]).to.be.false;
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
      expect(classes).to.deep.equal({
        "v-code-block--button-copy-icon-status-copy": true,
        "v-code-block--me-1": true,
        "v-code-block--tab-prism-neon-bunny-icon": true,
        "v-code-block--tab-prism-neon-bunny-icon-status-copy": true,
      });
    });

    it('highlightjs class', () => {
      highlightjs.value = true;
      classes = useIconClasses({ copyStatus, highlightjs, useTheme: defaultTheme });
      expect(classes[highlightjsClass]).to.be.true;

      highlightjs.value = false;
      classes = useIconClasses({ copyStatus, highlightjs, useTheme: defaultTheme });
      expect(classes[highlightjsClass]).to.be.undefined;
    });

    it('prismjs class', () => {
      classes = useIconClasses({ copyStatus, highlightjs, useTheme: defaultTheme });
      expect(classes[prismjsClass]).to.be.true;

      highlightjs.value = true;
      classes = useIconClasses({ copyStatus, highlightjs, useTheme: defaultTheme });
      expect(classes[prismjsClass]).to.be.undefined;
    });

    it('copy status classes for prismjs', () => {
      highlightjs.value = false;
      classes = useIconClasses({ copyStatus, highlightjs, useTheme: defaultTheme });
      expect(classes[`${prismCopyStatusClassPrefix}-copy`]).to.be.true;

      copyStatus.value = 'success';
      classes = useIconClasses({ copyStatus, highlightjs, useTheme: defaultTheme });
      expect(classes[`${prismCopyStatusClassPrefix}-success`]).to.be.true;

      copyStatus.value = 'failed';
      classes = useIconClasses({ copyStatus, highlightjs, useTheme: defaultTheme });
      expect(classes[`${prismCopyStatusClassPrefix}-failed`]).to.be.true;
    });

    it('copy status classes for highlightjs', () => {
      highlightjs.value = true;
      copyStatus.value = 'copy';
      classes = useIconClasses({ copyStatus, highlightjs, useTheme: defaultTheme });
      expect(classes[`${highlightjsStatusClassPrefix}-copy`]).to.be.true;

      copyStatus.value = 'success';
      classes = useIconClasses({ copyStatus, highlightjs, useTheme: defaultTheme });
      expect(classes[`${highlightjsStatusClassPrefix}-success`]).to.be.true;

      copyStatus.value = 'failed';
      classes = useIconClasses({ copyStatus, highlightjs, useTheme: defaultTheme });
      expect(classes[`${highlightjsStatusClassPrefix}-failed`]).to.be.true;
    });
  });

  describe('useLabelClasses', () => {
    const isMobile = ref(false);
    const mobileClass = `${pluginName}--label-mobile`;

    let classes = useLabelClasses({ isMobile });

    it('should return icon class defaults', () => {
      expect(classes).to.deep.equal({
        "v-code-block--label": true,
        "v-code-block--label-mobile": false,
      });
    });

    it('mobile classes', () => {
      classes = useLabelClasses({ isMobile });
      expect(classes[mobileClass]).to.be.false;

      isMobile.value = true;
      classes = useLabelClasses({ isMobile });
      expect(classes[mobileClass]).to.be.true;
    });
  });

  describe('useTabClasses', () => {
    const highlightjs = ref(defaultProps.highlightjs);
    const tabClassPrefix = `${pluginName}--tab`;

    let classes = useTabClasses({ highlightjs, useTheme: defaultTheme });

    it('should return icon class defaults', () => {
      expect(classes).to.deep.equal({
        "v-code-block--tab-neon-bunny": true,
        "v-code-block--tab-prism-neon-bunny": true,
      });
    });

    it('highlightjs classes', () => {
      classes = useTabClasses({ highlightjs, useTheme: defaultTheme });
      expect(classes[`${tabClassPrefix}-highlightjs-${defaultTheme}`]).to.be.undefined;

      highlightjs.value = true;
      classes = useTabClasses({ highlightjs, useTheme: defaultTheme });
      expect(classes[`${tabClassPrefix}-highlightjs-${defaultTheme}`]).to.be.true;
    });

    it('prismjs classes', () => {
      highlightjs.value = false;
      classes = useTabClasses({ highlightjs, useTheme: defaultTheme });
      expect(classes[`${tabClassPrefix}-prism-${defaultTheme}`]).to.be.true;

      highlightjs.value = true;
      classes = useTabClasses({ highlightjs, useTheme: defaultTheme });
      expect(classes[`${tabClassPrefix}-prism-${defaultTheme}`]).to.be.undefined;
    });
  });
});
