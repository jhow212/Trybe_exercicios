import Person from "./classe.person";

export default class NaturalPerson extends Person {
  private _cpf: string;
  constructor(name: string, cpf: string) {
    super(name);
    this._cpf = cpf;
  }

  get cpf(): string {
    return this._cpf;
  }
}
