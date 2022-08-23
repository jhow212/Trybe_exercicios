import Person from "../Classes/Classe_Persons/classe.person";

export interface Myinterface {
  myNumber: number;
  myFunc(myParam: number): string;
}

export interface Board {
  save(): void;
}

export interface Database {
  save(content: any): void;
}

export interface Contract {
  subject: string;
  clauses: string[];
  signatories: Person[];
  describe(): void;
}
