/* eslint-disable no-empty */
/* eslint-disable unicorn/prevent-abbreviations */
/* eslint-disable unicorn/catch-error-name */
/* eslint-disable id-length */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable func-style */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
async function validInTryCatch1() {
  try {
    return await Promise.resolve('try');
  } catch (e) {}
}

async function validInTryCatch2() {
  return Promise.resolve('try');
}

async function validInTryCatch3() {
  return 'value';
}
