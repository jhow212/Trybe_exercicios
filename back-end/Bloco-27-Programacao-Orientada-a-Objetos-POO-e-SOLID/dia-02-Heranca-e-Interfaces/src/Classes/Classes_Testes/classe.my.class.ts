import { Myinterface } from "../../interfaces/my.interface";

export default class MyClass implements Myinterface {
  constructor(public myNumber: number) {}

  public myFunc(myParam: number): string {
    const result = myParam + this.myNumber;

    return `myNumber + myParam: ${result}`;
  }
}
