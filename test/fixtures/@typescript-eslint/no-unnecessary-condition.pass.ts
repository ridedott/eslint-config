/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/generic-type-naming */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable func-style */

function noUnnecessaryConditionPass<T>(items: T[]) {
  return items.length && items[0];
}
