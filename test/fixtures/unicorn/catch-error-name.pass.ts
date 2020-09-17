/* eslint-disable @typescript-eslint/explicit-function-return-type */

const catchErrorNamePass = () => {};

try {
  catchErrorNamePass();
} catch (error: unknown) {
  // …
}
