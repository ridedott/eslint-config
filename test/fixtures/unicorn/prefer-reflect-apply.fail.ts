/* eslint-disable no-useless-call */
/* eslint-disable func-style */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
function preferReflectApplyFail() {}

preferReflectApplyFail.apply(null, [42]);
Function.prototype.apply.call(preferReflectApplyFail, null, [42]);
preferReflectApplyFail.apply(this, [42]);
Function.prototype.apply.call(preferReflectApplyFail, this, [42]);
preferReflectApplyFail.apply(null, arguments);
Function.prototype.apply.call(preferReflectApplyFail, null, arguments);
preferReflectApplyFail.apply(this, arguments);
Function.prototype.apply.call(preferReflectApplyFail, this, arguments);
