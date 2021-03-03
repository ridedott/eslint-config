/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable no-constant-condition */

const preferTernaryPass = function* (): Iterable<string> {
  yield 'a' ? 'a' : 'b';
};
