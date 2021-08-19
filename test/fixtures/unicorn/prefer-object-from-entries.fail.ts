const preferObjectFromEntriesFailArray = [
  ['a', 0],
  ['b', 0],
] as Array<[string, number]>;

const preferObjectFromEntriesFail = preferObjectFromEntriesFailArray.reduce<
  Record<string, number>
>(
  (
    accumulator: Record<string, number>,
    [key, value]: [string, number],
  ): Record<string, number> => ({
    ...accumulator,
    [key]: value,
  }),
  {},
);
