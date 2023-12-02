import { CSSProperties } from 'vue';
import { useConvertToUnit } from './helpers';
import {
	UseCodeTagStyles,
	UseHeaderStyles,
	UsePreTagStyles,
	UseTabGroupStyles,
} from '@/plugin/types';


export const useCodeTagStyles: UseCodeTagStyles = (options) => {
	const { isLoading, useTheme } = options;
	const width = unref(useTheme) === 'coy' && isLoading === false ? '100%' : '';

	const styles = {
		width,
	};

	return styles as CSSProperties;
};

export const useHeaderStyles: UseHeaderStyles = (options) => {
	const { floatingTabs, tabGap } = options;

	const styles = {
		bottom: floatingTabs ? '1px' : '0',
		gap: useConvertToUnit(unref(tabGap)),
	};

	return styles as CSSProperties;
};

export const usePreTagStyles: UsePreTagStyles = (options) => {
	const { copyTab, height, maxHeight, radius, runTab, tabs, useTheme } = options;
	let borderRadius = `${radius} 0 ${radius} ${radius} !important`;

	if (!unref(tabs) || (!unref(copyTab) && !unref(runTab))) {
		borderRadius = radius as string;
	}

	const display = unref(useTheme) !== 'funky' ? 'flex' : 'block';

	const styles = {
		borderRadius,
		display,
		height: useConvertToUnit(unref(height)),
		maxHeight: useConvertToUnit(unref(maxHeight)),
		overflow: 'auto',
	};

	return styles as CSSProperties;
};

export const useTabGroupStyles: UseTabGroupStyles = (options) => {
	const { tabGap } = options;

	const styles = {
		gap: useConvertToUnit(unref(tabGap)),
	};

	return styles as CSSProperties;
};
