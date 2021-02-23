const myFavoriteColor = '#112C85';

const query = { categoryId: 1 };

const { categoryId } = query;

type ReadOnlyPass<TType extends Record<string, unknown>> = {
  readonly [TKey in keyof TType]: TType[TKey];
};

const agenices = {
  CIA: true,
  FBI: true,
};

const ncFunction = (_: string): void => {
  bar();
};

const { dontNeedYou: _, ...other } = { dontNeedYou: true };

enum NCE {
  Aaa = 'a',
  Bbb = 'b',
}

const { Aaa } = NCE;

interface Entity {
  _version: number;
}
