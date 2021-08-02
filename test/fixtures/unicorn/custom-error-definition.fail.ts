/* eslint-disable functional/no-this-expression */

class CustomFailError extends Error {
  public constructor(message: string) {
    super(message);

    this.name = 'CustomError';
  }
}
