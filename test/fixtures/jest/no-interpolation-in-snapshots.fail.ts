/* eslint-disable @typescript-eslint/no-useless-template-literals */
it('passes', (): void => {
  expect.hasAssertions();

  expect('a').toMatchInlineSnapshot(`"${'a'}"`);
});
