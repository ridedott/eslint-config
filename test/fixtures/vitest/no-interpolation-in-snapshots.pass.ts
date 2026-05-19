it('passes', (): void => {
  expect.hasAssertions();

  expect('a').toMatchInlineSnapshot(`"a"`);
});
