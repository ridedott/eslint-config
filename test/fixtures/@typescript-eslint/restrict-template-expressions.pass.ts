/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable unicorn/prevent-abbreviations */

const arg = 'foo';
const restrictTemplateExpressions1 = `arg = ${arg}`;
const restrictTemplateExpressions2 = `arg = ${arg || 'default'}`;
