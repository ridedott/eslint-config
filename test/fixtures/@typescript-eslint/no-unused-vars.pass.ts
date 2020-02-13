/* eslint-disable sort-keys */

const data = { type: 1, some: 'other', another: 'one' };
// 'type' is ignored because it has a rest property sibling.
const { type, ...coords } = data;
export const ignoreRestSiblings = coords;
