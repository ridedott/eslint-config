/* eslint-disable @typescript-eslint/no-magic-numbers */
const containerPass: { [i: string]: number } = {
  /* ... */
};

// Constant runtime lookups by string index
delete containerPass.aaa;

// Constants that must be accessed by []
delete containerPass[7];
delete containerPass['-Infinity'];
