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

/**
 * Formats a border-radius value, adding units to bare numbers.
 * When squareTopRight is set (tabs sit on that corner), the value is expanded to its
 * four corners (1-4 values, either side of an optional "/") and the top-right corner is set to 0.
 */
function formatBorderRadius(radius: string | undefined, squareTopRight: boolean): string | undefined {
	const value = String(radius ?? '').trim();

	if (!value) {
		return undefined;
	}

	const sides = value.split('/').map((side) => side.trim().split(/\s+/)
		.map((part) => useConvertToUnit({ str: part }) as string));

	// Not a valid shorthand, leave it as it is //
	if (sides.length > 2 || sides.some((corners) => corners.length > 4)) {
		return value;
	}

	if (!squareTopRight) {
		return sides.map((corners) => corners.join(' ')).join(' / ');
	}

	return sides.map((corners) => {
		const [topLeft, topRight = topLeft, bottomRight = topLeft, bottomLeft = topRight] = corners;

		return `${topLeft} 0 ${bottomRight} ${bottomLeft}`;
	}).join(' / ');
}

export const usePreTagStyles: UsePreTagStyles = (options) => {
	const { copyTab, height, maxHeight, radius, runTab, tabs, useTheme } = options;
	const hasTab = !!unref(tabs) && (!!unref(copyTab) || !!unref(runTab));
	let borderRadius = formatBorderRadius(unref(radius), hasTab);

	if (hasTab && borderRadius) {
		borderRadius = `${borderRadius} !important`;
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
