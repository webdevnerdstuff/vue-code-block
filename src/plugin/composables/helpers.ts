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
