import { Contract } from "../../interfaces/my.interface";
import Person from "../Classe_Persons/classe.person";

export default class SalesContract implements Contract {
  private _signatories: Person[];
  private _clauses: string[];
  constructor() {
    this._signatories = [];
    this._clauses = [];
  }

  get signatories(): Person[] {
    return [...this._signatories];
  }

  get clauses(): string[] {
    return [...this._clauses];
  }

  get subject(): string {
    return "Sales";
  }

  sign(signatory: Person): void {
    this._signatories.push(signatory);
  }
  addClause(clause: string): void {
    if (this._signatories.length > 0) {
      this._clauses.push(clause);
    }
  }

  describe(): void {
    console.log("--------------------");
    console.log(`Contrato: ${this.subject}`);
    this.clauses.forEach((clause: string): void => {
      console.log(`Cláusula: ${clause}`);
    });
    this.signatories.forEach((signatory: Person): void => {
      console.log(`Assinado por: ${signatory.name}`);
    });
    console.log("--------------------\n");
  }
}
