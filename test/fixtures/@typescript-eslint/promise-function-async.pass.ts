/* eslint-disable func-style */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
const arrowFunctionReturnsPromise2 = async () => Promise.resolve('value');

async function functionReturnsPromise2() {
  return Promise.resolve('value');
}
