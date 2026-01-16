/* eslint-disable functional/immutable-data */

const element = {} as HTMLElement;
const preferSingleCallPass: number[] = [];

element.classList.add('foo', 'bar', 'baz');
preferSingleCallPass.push(0, 1);
