/* eslint-disable @typescript-eslint/explicit-function-return-type */

const catchErrorNameFail = () => {};

try {
  catchErrorNameFail();
} catch (ohNoes: unknown) {
  // …
}
