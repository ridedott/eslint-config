/* eslint-disable functional/no-this-expression */

class CustomPassError extends Error {
  public constructor(message: string) {
    super(message);

    this.name = 'CustomPassError';
  }
}
