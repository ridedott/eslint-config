/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-member-accessibility */
/* eslint-disable @typescript-eslint/lines-between-class-members */
/* eslint-disable @typescript-eslint/no-useless-constructor */
/* eslint-disable @typescript-eslint/prefer-readonly */
/* eslint-disable class-methods-use-this */

interface Test {
  a: undefined;
  b: undefined;
}

class Test2 {
  public static b: undefined;
  protected static c: undefined;
  private static a: undefined;
  constructor() {}
  static cm() {}
  am() {}
  bm() {}
  private dm() {}
}
