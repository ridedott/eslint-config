/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable func-style */
/* eslint-disable unicorn/no-useless-promise-resolve-reject */

const arrowFunctionReturnsPromise2 = async () => Promise.resolve('value');

async function functionReturnsPromise2() {
  return Promise.resolve('value');
}
