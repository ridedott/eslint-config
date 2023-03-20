/* eslint-disable functional/no-this-expressions */

class CustomPassError extends Error {
  public constructor(message: string) {
    super(message);

    this.name = 'CustomPassError';
  }
}
