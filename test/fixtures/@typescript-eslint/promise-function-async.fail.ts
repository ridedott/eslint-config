/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable func-style */

const arrowFunctionReturnsPromise = () => Promise.resolve('value');

function functionReturnsPromise() {
  return Promise.resolve('value');
}
