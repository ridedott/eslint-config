/* eslint-disable id-length */
/* eslint-disable @typescript-eslint/typedef */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
const concatFlat = [].concat(...array);

const reduceFlat = array.reduce((p, n) => p.concat(n), []);