import Superclass from "./classe.superClass";

export default class Subclass extends Superclass {
  constructor() {
    super();
    this.isSuper = false;
  }
  public sayHello2(): void {
    this.sayHello();
  }
}
