/* eslint-disable unicorn/prevent-abbreviations */
/* eslint-disable @typescript-eslint/no-unused-vars */
const arrayTypeFail1: (string | number)[] = ['a', 'b'];
const arrayTypeFail2: { prop: string }[] = [{ prop: 'a' }];
const arrayTypeFail3: (() => void)[] = [() => {}];
const arrayTypeFail4: Array<string> = ['a', 'b'];
const arrayTypeFail5: ReadonlyArray<string> = ['a', 'b'];
