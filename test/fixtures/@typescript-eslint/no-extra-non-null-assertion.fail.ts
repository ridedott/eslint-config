const nonNull: { bar: number } | null = null;
const noExtraNonNullAssertionFail2 = nonNull!!!.bar;
