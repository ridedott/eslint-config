/* eslint-disable id-length */
/* eslint-disable no-console */

const consistentDestructructingFail = { a: true, b: true };
const { a: consistentDestructructingFailA } = consistentDestructructingFail;
console.log(a, consistentDestructructingFail.b);
