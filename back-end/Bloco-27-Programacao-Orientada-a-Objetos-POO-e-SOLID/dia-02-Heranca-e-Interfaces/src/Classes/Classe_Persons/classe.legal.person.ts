import Person from "./classe.person";

export default class LegalPerson extends Person {
  private _cnpj: string;
  constructor(name: string, cnpj: string) {
    super(name);
    this._cnpj = cnpj;
  }
}
