/* eslint-disable functional/no-this-expressions */

class CustomFailError extends Error {
  public constructor(message: string) {
    super(message);

    this.name = 'CustomError';
  }
}
