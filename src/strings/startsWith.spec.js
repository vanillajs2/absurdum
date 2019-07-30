import test from 'tape';
import { strings } from '../../index.js';

test(`strings.startsWith(string, substr) - returns truthy when the string starts with the substring`, t => {
  const expect = true;
  const result = strings.startsWith('This sentence starts with', 'This');

  t.equal(Object.prototype.toString.call(result), '[object Boolean]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test(`strings.startsWith(string, substr) - returns falsy when the string doesn't start with the substring`, t => {
  const expect = false;
  const result = strings.startsWith('This sentence does not start with', 'Nope');

  t.equal(Object.prototype.toString.call(result), '[object Boolean]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});
