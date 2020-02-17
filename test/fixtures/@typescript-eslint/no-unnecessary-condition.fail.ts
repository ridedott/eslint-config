/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/generic-type-naming */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars-experimental */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable func-style */
/* eslint-disable no-empty */
/* eslint-disable unicorn/prevent-abbreviations */

function noUnnecessaryConditionFail1<T>(items: T[]) {
  // Items can never be nullable, so this is unnecessary
  if (items) {
    return items[0];
  }
}

function noUnnecessaryConditionFail2(arg: 'bar' | 'baz') {
  // Arg is never nullable or empty string, so this is unnecessary
  if (arg) {
  }
}

function noUnnecessaryConditionFail3<T>(arg: string) {
  // Arg can never be nullish, so ?. is unnecessary
  return arg?.length;
}
