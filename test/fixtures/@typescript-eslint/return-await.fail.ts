/* eslint-disable @typescript-eslint/await-thenable */
/* eslint-disable no-empty */
/* eslint-disable unicorn/prevent-abbreviations */
/* eslint-disable unicorn/catch-error-name */
/* eslint-disable id-length */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable func-style */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

async function invalidInTryCatch1() {
  try {
    return Promise.resolve('try');
  } catch (e) {}
}

async function invalidInTryCatch2() {
  return await Promise.resolve('try');
}

async function invalidInTryCatch3() {
  return await 'value';
}
