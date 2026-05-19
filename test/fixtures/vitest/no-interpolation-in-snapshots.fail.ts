/* eslint-disable @typescript-eslint/no-unnecessary-template-expression, vitest/prefer-importing-vitest-globals */
it('passes', (): void => {
  expect.hasAssertions();

  expect('a').toMatchInlineSnapshot(`"${'a'}"`);
});
