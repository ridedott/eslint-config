/* eslint-disable vitest/prefer-importing-vitest-globals */

it('passes', (): void => {
  expect.hasAssertions();

  expect('a').toMatchInlineSnapshot(`"a"`);
});
