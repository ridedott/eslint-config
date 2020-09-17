/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable id-length */

const sumReversePAss = [].reduce((p, c) => p + c, 0);

const reverseSumPAss = [].reduceRight((p, c) => p + c, 0);

const reverseArrayPass = [].reverse();

export const reverseMapPass = [].reverse().map((r) => r + 1);
