/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable func-style */

function noUnnecessaryConditionPass<Type>(items: Type[]) {
  return items.length && items[0];
}
