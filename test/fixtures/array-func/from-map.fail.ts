/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/typedef */
/* eslint-disable id-length */

export const iterable = new Map();
Array.from(iterable).map(t => t);

Array.from(iterable, t => t).map(id => id[0]);
