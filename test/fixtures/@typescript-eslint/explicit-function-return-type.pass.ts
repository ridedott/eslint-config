/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable func-names */

type FunctionType = () => string;

const arrowFunctionPass: FunctionType = () => 'test';

const functionExpressionPass: FunctionType = function () {
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
