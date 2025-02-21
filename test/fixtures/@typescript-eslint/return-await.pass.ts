/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable func-style */
/* eslint-disable id-length */
/* eslint-disable unicorn/catch-error-name */
/* eslint-disable unicorn/prevent-abbreviations */

async function validInTryCatch1() {
  try {
    return await Promise.resolve('try');
  } catch (e: unknown) {
    return 'something';
  }
}

async function validInTryCatch2() {
  return 'try';
}
