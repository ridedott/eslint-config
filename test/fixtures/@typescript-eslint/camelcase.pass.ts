/* eslint-disable @typescript-eslint/generic-type-naming */
/* eslint-disable @typescript-eslint/no-unused-vars */

const myFavoriteColor = '#112C85';

interface camelCaseFail<tFoo> {
  [key: string]: tFoo;
}

const query = { categoryId: 1 };

const { categoryId } = query;
