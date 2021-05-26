/* eslint-disable immutable/no-mutation */
/* eslint-disable immutable/no-this */

class CustomFailError extends Error {
  public constructor(message: string) {
    super(message);

    this.name = 'CustomError';
  }
}
