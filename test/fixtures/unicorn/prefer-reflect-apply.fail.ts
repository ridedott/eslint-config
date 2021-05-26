/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable func-style */
/* eslint-disable no-useless-call */

function preferReflectApplyFail() {}

preferReflectApplyFail.apply(null, [42]);
Function.prototype.apply.call(preferReflectApplyFail, null, [42]);
preferReflectApplyFail.apply(this, [42]);
Function.prototype.apply.call(preferReflectApplyFail, this, [42]);
