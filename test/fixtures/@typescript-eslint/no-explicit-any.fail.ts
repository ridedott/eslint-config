/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars-experimental */
/* eslint-disable unicorn/prevent-abbreviations */

const bar1 = (...args: any[]): void => {};

const bar2 = (...args: readonly any[]): void => {};

const bar3 = (...args: Array<any>): void => {};

const bar4 = (...args: ReadonlyArray<any>): void => {};
