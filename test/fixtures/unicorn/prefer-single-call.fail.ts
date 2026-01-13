/* eslint-disable functional/immutable-data */

const element = {} as HTMLElement;
const preferSingleCallFail: number[] = [];

element.classList.add('foo');
element.classList.add('bar', 'baz');

preferSingleCallFail.push(0);
preferSingleCallFail.push(0);
