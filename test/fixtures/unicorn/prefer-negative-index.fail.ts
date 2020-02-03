/* eslint-disable @typescript-eslint/no-magic-numbers */
const negativeIndexFail = [];
negativeIndexFail.slice(negativeIndexFail.length - 2, negativeIndexFail.length - 1);
negativeIndexFail.splice(negativeIndexFail.length - 1, 1);
Array.prototype.slice.call(negativeIndexFail, negativeIndexFail.length - 2, negativeIndexFail.length - 1);
Array.prototype.slice.apply(negativeIndexFail, [negativeIndexFail.length - 2, negativeIndexFail.length - 1]);
