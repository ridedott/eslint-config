/* eslint-disable @typescript-eslint/no-magic-numbers */

const negativeIndexPass = [];
negativeIndexPass.slice(-2, -1);
negativeIndexPass.splice(-1, 1);
Array.prototype.slice.call(negativeIndexPass, -2, -1);
Array.prototype.slice.apply(negativeIndexPass, [-2, -1]);
