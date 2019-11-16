/**
 * Concat takes any number or arrays or values as input. The arrays can be any level of depth. The output will be a single, one-dimensional array containing all the values.
 *
 * @param {Array} arrays input array(s)
 * @returns {Array} an array containing all of the input array values
 *
 * @example
 * const result = arrays.concat([1], 2, [3], [[4]]);
 * console.log(result);
 * > [1, 2, 3, [4]]
 */
function concat (...arrays) {
  return [...arrays].reduce((res, cur) => {
    if (typeof cur === 'object') {
      res.push(...cur);
    } else {
      res.push(cur);
    }
    return res;
  });
}

export { concat };
