/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable unicorn/catch-error-name */
/* eslint-disable unicorn/prevent-abbreviations */

const z = 5;

const foo = function (e) {};

try {
  foo('');
} catch (e: unknown) {
  // Ignore as many do
}

const myObj = { a: 1 };

(a) => {
  a * a;
};

const { y } = {};
const { x: a } = {};
const {
  a: [x],
} = {};
