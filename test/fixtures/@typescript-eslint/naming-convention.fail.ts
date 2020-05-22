/* eslint-disable @typescript-eslint/no-unused-vars */

const my_favorite_color = '#112C85';

interface IPrefix {
  fail: true;
}

interface camelCaseFail<t_foo> {
  [key: string]: t_foo;
}

type ReadOnly<T extends Record<string, unknown>> = {
  readonly [Key in keyof T]: T[Key];
};

interface SimpleMap<T> {
  [Key: string]: T;
}
