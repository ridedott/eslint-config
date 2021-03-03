/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable no-constant-condition */

const preferTernaryFail = function* () {
  if ('a') {
    yield 'a';
  } else {
    yield 'b';
  }
};
