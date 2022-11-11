/* eslint-disable functional/no-let */
/* eslint-disable @typescript-eslint/init-declarations */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
let value: string | undefined;
value || 'fallback';

let foo: string | undefined;
foo === undefined ? 'a string' : foo;
