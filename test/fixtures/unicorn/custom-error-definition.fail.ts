/* eslint-disable immutable/no-mutation */
/* eslint-disable immutable/no-this */

class CustomFailError extends Error {
  public constructor(message) {
    super(message);

    this.message = message;
    this.name = 'CustomError';
  }
}
