it('my test', (): void => {
  expect.assertions(1);
  expect(1).toStrictEqual('foo');
});

it('my test 2', (): void => {
  expect.hasAssertions();
  expect(1).toStrictEqual('foo');
});
