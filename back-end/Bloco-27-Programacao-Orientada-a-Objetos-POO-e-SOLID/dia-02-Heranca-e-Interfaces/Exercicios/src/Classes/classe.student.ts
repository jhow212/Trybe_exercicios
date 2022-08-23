import Person from "./classe.person";

export default class Student extends Person {
  private _enrollment: string;
  private _examsGrades: number[] = [];
  private _worksGrades: number[] = [];
  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this._enrollment = this.generateEnrollment();
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    if (value.length < 16)
      throw new Error("A matrícula deve possuir no mínimo 16 caracteres");
    this._enrollment = value;
  }

  // get name(): string {
  //   return this._name;
  // }

  // set name(value: string) {
  //   if (value.length < 3) {
  //     throw new Error("O nome deve conter pelo menos 3 caracteres.");
  //   }

  //   this._name = value;
  // }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  set examsGrades(value: number[]) {
    if (value.length > 4) {
      throw new Error(
        "A pessoa estudante só pode possuir no maximo 4 notas de provas"
      );
    }

    this._examsGrades = value;
  }

  get worksGrades(): number[] {
    return this._worksGrades;
  }

  set worksGrades(values: number[]) {
    if (values.length > 2) {
      throw new Error(
        "A pessoa estudante só pode possuir 2 notas de trabalhos"
      );
    }

    this._worksGrades = values;
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(
      /\W/g,
      ""
    );

    return `STU${randomStr}`;
  }

  sumGrades(): number {
    return [...this.examsGrades, ...this.worksGrades].reduce(
      (previusNote, note) => {
        const nextNote = note + previusNote;

        return nextNote;
      },
      0
    );
  }

  sumAvarageGrade(): number {
    const sumGrades = this.sumGrades();
    const divider = this.examsGrades.length + this.worksGrades.length;

    return Math.round(sumGrades / divider);
  }
}
