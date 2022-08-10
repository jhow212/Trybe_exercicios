import Animal from "./classe.animal";

export default class Mammal extends Animal {
  walk(): void {
    console.log(`${this.name} está andando!`);
  }
}
