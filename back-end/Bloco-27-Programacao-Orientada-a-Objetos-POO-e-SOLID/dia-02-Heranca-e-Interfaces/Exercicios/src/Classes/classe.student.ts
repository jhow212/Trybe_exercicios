export default class Student {
  private _enrollment: string;
  private _name: string;
  private _examsGrades: number[];
  private _worksGrades: number[];
  constructor(enrollment: string, name: string) {
    this._enrollment = enrollment;
    this._name = name;
    this._examsGrades = [];
    this._worksGrades = [];
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    this._enrollment = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.length < 3) {
      throw new Error("O nome deve conter pelo menos 3 caracteres.");
    }

    this._name = value;
  }

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
