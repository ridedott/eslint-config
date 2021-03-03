/* eslint-disable @typescript-eslint/consistent-type-assertions */

type FunctionType = () => string;

const arrowFunctionPass: FunctionType = (): string => 'test';

const functionExpressionPass: FunctionType = function (): string {
  return 'test';
};

const asTyped = ((): string => '') as () => string;
const castTyped = <() => string>((): string => '');

interface ObjectType {
  foo: () => number;
}
const objectPropertyPass = {
  foo: (): number => 1,
};
const objectPropertyAs = {
  foo: (): number => 1,
} as ObjectType;
const objectPropertyCast = <ObjectType>{
  foo: (): number => 1,
};
