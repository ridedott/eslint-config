/* eslint-disable @typescript-eslint/no-unused-vars */

const myFavoriteColor = '#112C85';

const query = { categoryId: 1 };

const { categoryId } = query;

type ReadOnlyPass<TType extends Record<string, unknown>> = {
  readonly [TKey in keyof TType]: TType[TKey];
};

const agenices = {
  CIA: true,
  FBI: true,
};

const ncFn = (_: string): void => bar();
