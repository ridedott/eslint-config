/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable func-style */

function noUnnecessaryConditionPass<Type>(items: Type[]) {
  return items.length > 0 && items[0];
}
