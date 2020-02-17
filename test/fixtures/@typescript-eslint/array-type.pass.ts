/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unicorn/prevent-abbreviations */

const arrayTypePass1: Array<string | number> = ['a', 'b'];
const arrayTypePass2: Array<{ prop: string }> = [{ prop: 'a' }];
const arrayTypePass3: Array<() => void> = [() => {}];
const arrayTypePass4: string[] = ['a', 'b'];
const arrayTypePass5: readonly string[] = ['a', 'b'];
