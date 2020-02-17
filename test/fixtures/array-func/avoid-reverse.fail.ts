/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/typedef */
/* eslint-disable id-length */

const sumReverseFail = [].reverse().reduce((p, c) => p + c, 0);

const reverseSumFail = [].reverse().reduceRight((p, c) => p + c, 0);
