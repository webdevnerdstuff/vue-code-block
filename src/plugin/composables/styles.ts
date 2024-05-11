import { unref } from 'vue';
import type { CSSProperties, } from 'vue';
import { useConvertToUnit } from './helpers';
import {
	UseCodeTagStyles,
	UseHeaderStyles,
	UsePreTagStyles,
	UseTabGroupStyles,
} from '@/plugin/types';


export const useCodeTagStyles: UseCodeTagStyles = (options) => {
	const { isLoading, useTheme } = options;
	const width = unref(useTheme) === 'coy' && unref(isLoading) === false ? '100%' : '';

	const styles: { width: string, padding?: string; } = {
		width,
	};

	if (unref(useTheme) === 'coy') {
		styles.padding = '1em';
	}

	return styles as CSSProperties;
};

export const useHeaderStyles: UseHeaderStyles = (options) => {
	const { floatingTabs, tabGap } = options;

	const styles = {
		bottom: floatingTabs ? '1px' : '0',
		gap: useConvertToUnit({ str: unref(tabGap) }) || '0px',
	};

	return styles as CSSProperties;
};

// TODO (fix): The border radius is not set correctly if using multiple units with tabs //
export const usePreTagStyles: UsePreTagStyles = (options) => {
	const { copyTab, height, maxHeight, radius, runTab, tabs, useTheme } = options;
	const unrefRadius = unref(radius);
	let borderRadius = `${unrefRadius} 0 ${unrefRadius} ${unrefRadius} !important`;

	if (!unref(tabs) || (!unref(copyTab) && !unref(runTab))) {
		borderRadius = unrefRadius as string;
	}

	const display = unref(useTheme) !== 'funky' ? 'flex' : 'block';

	const styles = {
		borderRadius,
		display,
		height: useConvertToUnit({ str: unref(height) }),
		maxHeight: useConvertToUnit({ str: unref(maxHeight) }),
		overflow: 'auto',
	};

	return styles as CSSProperties;
};

export const useTabGroupStyles: UseTabGroupStyles = (options) => {
	const { tabGap } = options;

	const styles = {
		gap: useConvertToUnit({ str: unref(tabGap) }) || '0px',
	};

	return styles as CSSProperties;
};
