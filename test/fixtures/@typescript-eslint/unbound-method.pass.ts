/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-invalid-this */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/typedef */
/* eslint-disable immutable/no-this */
/* eslint-disable no-console */

class MyClass2 {
  public logBound = () => console.log(this);

  public logUnbound(): void {
    console.log(this);
  }
}

const instance2 = new MyClass2();

const { logBound } = instance2;
logBound();

// .bind and lambdas will also add a correct scope
const dotBindLog = instance2.logBound.bind(instance2);
const innerLog = () => instance2.logBound();
