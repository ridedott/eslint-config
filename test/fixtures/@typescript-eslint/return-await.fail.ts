/* eslint-disable @typescript-eslint/await-thenable */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable func-style */
/* eslint-disable id-length */
/* eslint-disable unicorn/catch-error-name */
/* eslint-disable unicorn/prevent-abbreviations */

async function invalidInTryCatch1() {
  try {
    return Promise.resolve('try');
  } catch (e: unknown) {
    return 'something';
  }
}

async function invalidInTryCatch2() {
  return await 'try';
}
