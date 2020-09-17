/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable func-style */

function consistentFunctionScopingPass(bar) {
  return bar === 'bar';
}

export function consistentFunctionScopingPass2(foo) {
  return consistentFunctionScopingPass;
}

const afa = 1;

export function consistentFunctionScopingPass3(foo) {
  function consistentFunctionScopingPass4(bar) {
    return bar === 'bar' && foo.consistentFunctionScopingPass(bar);
  }

  return consistentFunctionScopingPass;
}
