test('my test', () => {
  expect.assertions('1');
  expect(1).toEqual('foo');
});

test('my test', () => {
  expect(1).toStrictEqual('foo');
});
