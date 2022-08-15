import Animal from "./classe.animal";

export default class Bird extends Animal {
  constructor(public name: string, protected birthDate: Date) {
    super(new Date());
  }
  public fly(): void {
    console.log(`${this.name} está voando!`);
  }

  public showBirthDate(): void {
    console.log(this.birthDate);
  }
}
