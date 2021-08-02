/* eslint-disable functional/no-this-expression */
/* eslint-disable no-console */

class MyClass {
  public log(): void {
    console.log(this);
  }
}

const instance = new MyClass();

const myLog = instance.log;
myLog();
