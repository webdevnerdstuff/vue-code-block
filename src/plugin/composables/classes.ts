import { pluginName } from '../utils/globals';
import {
	UseCodeBlockClasses,
	UseCopyButtonClasses,
	UseIconClasses,
	UseLabelClasses,
	UseTabClasses,
} from '@/plugin/types';



function getTheme(useTheme: string | boolean): string | boolean {
	return useTheme === '' || useTheme === 'prism' ? 'default' : useTheme;
}

function getActiveLibrary(highlightjs?: boolean): string {
	if (highlightjs) {
		return 'highlightjs';
	}

	return 'prism';
}


// -------------------------------------------------- Foo //
export const useCodeBlockClasses: UseCodeBlockClasses = (options) => {
	const { isMobile, isPrism } = options;

	return {
		[`${pluginName}`]: true,
		[`${pluginName}-mb-5`]: true,
		[`${pluginName}--mobile`]: unref(isMobile),
		[`${pluginName}--prismjs`]: unref(isPrism),
		[`${pluginName}--highlightjs`]: !unref(isPrism),

	};
};

export const useCopyButtonClasses: UseCopyButtonClasses = (options) => {
	const { copyStatus, isMobile, persistentCopyButton } = options;

	return {
		[`${pluginName}--code-copy-button`]: true,
		[`${pluginName}--code-copy-button-mobile`]: unref(isMobile),
		[`${pluginName}--code-copy-button-persist`]: unref(persistentCopyButton),
		[`${pluginName}--code-copy-button-status-${unref(copyStatus)}`]: true,
	};
};

export const useIconClasses: UseIconClasses = (options) => {
	const { copyStatus, highlightjs, useTheme } = options;

	const activeLibrary = getActiveLibrary(unref(highlightjs));
	const theme = getTheme(unref(useTheme));

	return {
		[`${pluginName}--button-copy-icon-status-${unref(copyStatus)}`]: true,
		[`${pluginName}--me-1`]: true,
		[`${pluginName}--tab-${activeLibrary}-${theme}-icon-status-${unref(copyStatus)}`]: true,
		[`${pluginName}--tab-${activeLibrary}-${theme}-icon`]: true,
	};
};

export const useLabelClasses: UseLabelClasses = (options) => {
	const { isMobile } = options;

	return {
		[`${pluginName}--label`]: true,
		[`${pluginName}--label-mobile`]: unref(isMobile),
	};
};

export const useTabClasses: UseTabClasses = (options) => {
	const { highlightjs, useTheme } = options;

	const activeLibrary = getActiveLibrary(unref(highlightjs));
	const theme = getTheme(unref(useTheme));

	return {
		[`${pluginName}--tab-${theme}`]: true,
		[`${pluginName}--tab-${activeLibrary}-${theme}`]: true,
	};
};
