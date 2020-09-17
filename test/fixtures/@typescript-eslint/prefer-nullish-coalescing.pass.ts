/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable func-style */

function myFunc(foo: string | null) {
  return foo ?? 'a string';
}
