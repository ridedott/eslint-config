/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable func-style */

const arrowFunctionReturnsPromise2 = async () => Promise.resolve('value');

async function functionReturnsPromise2() {
  return Promise.resolve('value');
}
