/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
const nonNull: { bar: number } | null = null;
const noExtraNonNullAssertionFail2 = nonNull!!!.bar;
