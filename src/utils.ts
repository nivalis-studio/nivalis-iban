export const NON_ALPHANUM = /[^\da-z]/gi;
export const EVERY_FOUR_CHARS = /(.{4})(?!$)/g;
export const A_CODE_POINT_AT = 65; // 'A'.codePointAt(0);

// Maximum reasonable IBAN length (Qatar has 29 characters, adding buffer)
export const MAX_IBAN_LENGTH = 34;
export const MIN_IBAN_LENGTH = 15;

/**
 * Utility function to check if a variable is a String.
 * @param {unknown} value the variable to check
 * @returns {boolean} true if the passed variable is a String, false otherwise.
 */
export const isString = (value: unknown): value is string =>
  typeof value === 'string';

/**
 * Validates input string format for IBAN processing
 * @param {string} input the string to validate
 * @param {boolean} requireMinLength whether to enforce minimum IBAN length
 * @returns {string} the formatted string
 */
export const validateAndFormat = (
  input: string,
  requireMinLength = true,
): string => {
  if (!isString(input)) {
    throw new Error('Input must be a string');
  }

  if (input.length > MAX_IBAN_LENGTH) {
    throw new Error(
      `Input too long: maximum ${MAX_IBAN_LENGTH} characters allowed`,
    );
  }

  const formatted = input.replaceAll(NON_ALPHANUM, '').toUpperCase();

  if (requireMinLength && formatted.length < MIN_IBAN_LENGTH) {
    throw new Error(
      `IBAN too short: minimum ${MIN_IBAN_LENGTH} characters required`,
    );
  }

  return formatted;
};
