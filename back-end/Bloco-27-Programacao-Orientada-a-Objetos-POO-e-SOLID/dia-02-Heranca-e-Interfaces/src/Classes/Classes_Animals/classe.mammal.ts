import Animal from "./classe.animal";

export default class Mammal extends Animal {
  constructor(public name: string, protected birthDate: Date) {
    super(new Date());
  }
  public walk(): void {
    console.log(`${this.name} está andando!`);
  }
}
