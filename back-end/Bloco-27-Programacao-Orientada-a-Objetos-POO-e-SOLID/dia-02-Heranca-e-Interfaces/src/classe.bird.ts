import Animal from "./classe.animal";

export default class Bird extends Animal {
  fly(): void {
    console.log(`${this.name} está voando!`);
  }
}
