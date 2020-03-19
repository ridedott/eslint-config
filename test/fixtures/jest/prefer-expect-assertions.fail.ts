it('my test', () => {
  expect.assertions('1');
  expect(1).toEqual('foo');
});

it('my test', () => {
  expect(1).toStrictEqual('foo');
});
