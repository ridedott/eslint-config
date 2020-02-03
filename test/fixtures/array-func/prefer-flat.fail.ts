/* eslint-disable id-length */
/* eslint-disable @typescript-eslint/typedef */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
const concatFlatPreferFlatFail = [].concat(...[1]);

const reduceFlatPreferFlatFail = [].reduce((p, n) => p.concat(n), []);
