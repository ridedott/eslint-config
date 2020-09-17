/* eslint-disable @typescript-eslint/await-thenable */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable func-style */
/* eslint-disable id-length */
/* eslint-disable no-empty */
/* eslint-disable unicorn/catch-error-name */
/* eslint-disable unicorn/prevent-abbreviations */

async function invalidInTryCatch1() {
  try {
    return Promise.resolve('try');
  } catch (e: unknown) {}
}

async function invalidInTryCatch2() {
  return await Promise.resolve('try');
}

async function invalidInTryCatch3() {
  return await 'value';
}
