/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable id-length */
/* eslint-disable unicorn/no-array-reverse */

const sumReverseFail = [].reverse().reduce((p, c) => p + c, 0);

const reverseSumFail = [].reverse().reduceRight((p, c) => p + c, 0);
