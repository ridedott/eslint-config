/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable id-length */
/* eslint-disable @typescript-eslint/typedef */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */

const oneActionPreferFlatMapPass = [].flatMap((m) => m);

const flattenedPreferFlatMapPass = [].flat();

const mappedPreferFlatMapPass = [].map((r) => r + 1);

const mappedThenFlattenedPreferFlatMapPass = [].flat().map((r) => r);

const flatMappedWithExtraPreferFlatMapPass = [].map((r) => r + 1).reverse().flat();
