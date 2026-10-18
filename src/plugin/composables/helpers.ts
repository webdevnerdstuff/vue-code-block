import { UseConvertToUnit } from '@/plugin/types';


/**
* Converts a string to a number with a unit.
*/
export const useConvertToUnit: UseConvertToUnit = (options) => {
	const { str, unit = 'px' } = options;

	if (str == null || str === '' || typeof str === 'undefined') {
		return undefined;
	}

	if (!+str) {
		return String(str);
	}

	return `${Number(str)}${unit}`;
};


// -------------------------------------------------- Deep Merging #
/**
 * Object check.
 */
function isObject(item: object): boolean {
	return (item && typeof item === 'object' && !Array.isArray(item));
}

/**
 * Deep merge objects.
 */
export function useDeepMerge(target: object | object[], ...sources: object[]): object {
	if (!sources.length) {
		return target;
	}

	const source = sources.shift() as object[];

	if (isObject(target) && isObject(source)) {
		for (const key in source) {
			// @ts-ignore
			if (isObject(source[key])) {
				if (!target[key as keyof object]) {
					Object.assign(target, { [key]: {} });
				}

				// @ts-ignore
				useDeepMerge(target[key as keyof object], source[key]);
			}
			else {
				Object.assign(target, { [key]: source[key] });
			}
		}
	}

	return useDeepMerge(target, ...sources);
}
