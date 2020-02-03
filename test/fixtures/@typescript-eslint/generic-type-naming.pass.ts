type ReadOnlyPass<TType extends object> = {
  readonly [TKey in keyof TType]: TType[TKey];
};
