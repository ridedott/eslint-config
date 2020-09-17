/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable id-length */

const concatFlatPreferFlatFail = [].concat(...[1]);

const reduceFlatPreferFlatFail = [].reduce((p, n) => p.concat(n), []);
