/**
* Converts a string to a number with a unit.
*/
export function useConvertToUnit(str: string | number | undefined | null, unit = 'px'): string | void {
	if (str == null || str === '' || typeof str === 'undefined') {
		return undefined;
	}

	if (!+str) {
		return String(str);
	}

	return `${Number(str)}${unit}`;
}
