/* eslint-disable @typescript-eslint/no-unnecessary-template-expression */
it('passes', (): void => {
  expect.hasAssertions();

  expect('a').toMatchInlineSnapshot(`"${'a'}"`);
});
