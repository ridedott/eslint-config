/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable func-names */

type FuncType = () => string;

const arrowFnPass: FuncType = () => 'test';

const funcExprPass: FuncType = function () {
  return 'test';
};

const asTyped = (() => '') as () => string;
const castTyped = <() => string>(() => '');

interface ObjectType {
  foo: () => number;
}
const objectPropertyPass = {
  foo: () => 1,
};
const objectPropertyAs = {
  foo: () => 1,
} as ObjectType;
const objectPropertyCast = <ObjectType>{
  foo: () => 1,
};
