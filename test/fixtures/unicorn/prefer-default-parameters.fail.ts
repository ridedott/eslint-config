const preferDefaultParametersFail = (foo: string | undefined): string => {
  const bar = foo ?? 'bar';

  return bar;
};
