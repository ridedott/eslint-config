/* eslint-disable id-length */
/* eslint-disable no-console */

const consistentDestructructingPass = { a: true, b: (): boolean => true };
const { a: consistentDestructructingPassA } = consistentDestructructingPass;
console.log(a, consistentDestructructingPass.b());
