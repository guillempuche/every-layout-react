import { DimensionValue } from 'react-native';

/**
 * Converts a number and string to `DimensionValue` or `undefined`.
 *
 * For string format, check DimensionValue's [type](https://github.com/facebook/react-native/blob/main/packages/react-native/Libraries/StyleSheet/StyleSheetTypes.d.ts).
 *
 * @param value The value to convert.
 * @returns {DimensionValue | undefined} A valid DimensionValue or undefined.
 */
export const toDimensionValue = (
  value: number | string | undefined
): DimensionValue | undefined => {
  if (typeof value === 'number') {
    return value;
  }

  if (typeof value === 'string') {
    // Check for 'auto' and positive percentage values.
    if (value === 'auto' || /^\d+(\.\d+)?%$/.test(value)) {
      return value as DimensionValue;
    }

    // Convert positive or negative numbers (including decimals) to number type.
    const numericValue = parseFloat(value);
    if (!isNaN(numericValue)) {
      return numericValue;
    }
  }

  return undefined;
};

/**
 * Converts a number, a numeric string, or undefined to a number or undefined.
 * Non-numeric strings are converted to undefined.
 *
 * @param value The value to convert.
 * @returns {number | undefined} A number or undefined.
 */
export const toNumber = (
  value: string | number | undefined
): number | undefined => {
  if (typeof value === 'number') {
    return value;
  }

  if (typeof value === 'string' && !isNaN(Number(value))) {
    return Number(value);
  }

  // Return undefined for non-numeric strings or undefined inputs.
  return undefined;
};
