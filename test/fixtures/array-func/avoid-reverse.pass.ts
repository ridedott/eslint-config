/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable id-length */
/* eslint-disable @typescript-eslint/typedef */
/* eslint-disable @typescript-eslint/no-unused-vars-experimental */
/* eslint-disable @typescript-eslint/no-unused-vars */

const sumReversePAss = [].reduce((p, c) => p + c, 0);

const reverseSumPAss = [].reduceRight((p, c) => p + c, 0);

const reverseArrayPass = [].reverse();

export const reverseMapPass = [].reverse().map((r) => r + 1);
