/* eslint-disable @typescript-eslint/typedef */
/* eslint-disable unicorn/prevent-abbreviations */

/*
 * TODO (viestat) [2020-12-25]: Figure out why this rule breaks whe using:
 * testForMapFail.map((el) => el).flat();
 * Maybe it is due to a collision with array-func/prefer-flat-map.
 */

const testForMapFail = [];

testForMapFail.map(el => el);
