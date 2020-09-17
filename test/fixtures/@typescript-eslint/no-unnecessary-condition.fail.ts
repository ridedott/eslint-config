/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable func-style */
/* eslint-disable no-empty */
/* eslint-disable unicorn/prevent-abbreviations */

function noUnnecessaryConditionFail1<Type>(items: Type[]) {
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

function noUnnecessaryConditionFail3(arg: string) {
  // Arg can never be nullish, so ?. is unnecessary
  return arg?.length;
}
