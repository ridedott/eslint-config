/* eslint-disable functional/immutable-data */

const containerPass: { [i: string]: number } = {
  // ...
};

// Constant runtime lookups by string index
delete containerPass.aaa;

// Constants that must be accessed by []
delete containerPass[7];
delete containerPass['-Infinity'];
