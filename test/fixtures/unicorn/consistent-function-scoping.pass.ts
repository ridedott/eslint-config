/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars-experimental */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/typedef */
/* eslint-disable func-style */
/* eslint-disable no-shadow */

function consistentFunctionScopingPass(bar) {
  return bar === 'bar';
}

export function consistentFunctionScopingPass2(foo) {
  return consistentFunctionScopingPass;
}

export function consistentFunctionScopingPass3(foo) {
  function consistentFunctionScopingPass(bar) {
    return bar === 'bar' && foo.consistentFunctionScopingPass(bar);
  }

  return consistentFunctionScopingPass;
}
