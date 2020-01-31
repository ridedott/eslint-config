/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable id-length */
/* eslint-disable @typescript-eslint/typedef */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unicorn/filename-case */
const oneAction = array.flatMap((m) => m);

const flattened = array.flat();

const mapped = array.map((r) => r + 1);

const mappedThenFlattened = array.flat().map((r) => r + 1);

const flatMappedWithExtra = array.map((r) => r + 1).reverse().flat();
