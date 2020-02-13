/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars-experimental */
/* eslint-disable @typescript-eslint/typedef */
/* eslint-disable array-callback-return */
/* eslint-disable func-names */
/* eslint-disable id-length */
/* eslint-disable immutable/no-this */
/* eslint-disable max-statements-per-line */
/* eslint-disable no-invalid-this */
/* eslint-disable unicorn/prevent-abbreviations */

export const iterable = new Map();
Array.from(iterable, (t) => t);

Array.from(iterable, function(t) { this.format(t); }, this);

const arr = Array.from(iterable);
const mappedArray = arr.map((t) => t);
