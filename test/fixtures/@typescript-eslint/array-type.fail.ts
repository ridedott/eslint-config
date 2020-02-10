/* eslint-disable unicorn/prevent-abbreviations */
/* eslint-disable @typescript-eslint/no-unused-vars */

const arrayTypeFail1: Array<string | number> = ['a', 'b'];
const arrayTypeFail2: Array<{ prop: string }> = [{ prop: 'a' }];
const arrayTypeFail3: Array<() => void> = [() => {}];
const arrayTypeFail4: string[] = ['a', 'b'];
const arrayTypeFail5: readonly string[] = ['a', 'b'];
