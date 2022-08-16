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
