/**
 * Entries takes an object and returns an array composed from key-value pairs.
 *
 * @param {object} object input object
 * @returns {Array} an array composed from arrays of the key-value pairs
 *
 * @example
 * const result = objects.entries({ asuka: 643, heian: 795, meiji: 1868 });
 * console.log(result);
 * > [[asuka, 643], [heian, 795], [meiji: 1868]]
 */
export function entries(object: any): any[];
