import { anotherFunction } from './no-cycle/a.js';

export const someFunction = (): void => {
  anotherFunction();
};
