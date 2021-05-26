/* eslint-disable immutable/no-mutation */
/* eslint-disable immutable/no-this */

class CustomPassError extends Error {
  public constructor(message: string) {
    super(message);

    this.name = 'CustomPassError';
  }
}
