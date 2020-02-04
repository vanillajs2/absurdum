import test from 'tape';
import { fill } from 'absurdum/arrays';

test('arrays.fill(array, value) - should fill the array with the value', t => {
  const expect = ['a', 'a', 'a', 'a'];
  const actual = fill([1, 2, 3, 4], 'a');

  t.equal(Object.prototype.toString.call(actual), '[object Array]', 'return type');
  t.equal(actual.length, 4, 'output length');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('arrays.fill(array, value, start) - should fill the array with the value from the start index', t => {
  const expect = [1, 2, 'b', 'b'];
  const actual = fill([1, 2, 3, 4], 'b', 2);

  t.equal(Object.prototype.toString.call(actual), '[object Array]', 'return type');
  t.equal(actual.length, 4, 'output length');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('arrays.fill(array, value, , end) - should fill the array up to the end index', t => {
  const expect = ['c', 'c', 3, 4];
  const actual = fill([1, 2, 3, 4], 'c', null, 1);

  t.equal(Object.prototype.toString.call(actual), '[object Array]', 'return type');
  t.equal(actual.length, 4, 'output length');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('arrays.fill(array, value) - should not mutate the input', t => {
  const input = [1, 2, 3];
  const expect = [1, 2, 3];
  fill(input, 'a');

  t.deepEqual(input, expect, 'input mutation');

  t.end();
});
