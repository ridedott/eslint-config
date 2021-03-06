/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable arrow-body-style */
/* eslint-disable func-style */

export function consistentFunctionScopingFail(_foo) {
  // Does not capture anything from the scope, can be moved to the outer scope
  function doBar(bar) {
    return bar === 'bar';
  }

  return doBar;
}

function consistentFunctionScopingFail2(_foo) {
  const doBar = (bar) => {
    return bar === 'bar';
  };
}
