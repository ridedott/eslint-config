/* eslint-disable @typescript-eslint/generic-type-naming */
/* eslint-disable @typescript-eslint/no-unused-vars */

const my_favorite_color = '#112C85';

interface camelCaseFail<t_foo> {
  [key: string]: t_foo;
}

const query = { category_id: 1 };

const { category_id } = query;
