import Person from "./Classes/classe.person";
import Student from "./Classes/classe.student";
import Subject from "./Classes/classe.subject";
import Teacher from "./Classes/classe.teacher";
import { Employee } from "./Interfaces/interfaces";

// //Para testar a class antes das mudanças Student!
// const personOne = new Student("202001011", "Maria da Silva");
// console.log(personOne);

// const personTwo = new Student("202001012", "João da Silva");
// console.log(personTwo);

// //Para testar a class antes das mudanças Student!
// personOne.examsGrades = [25, 20, 23, 23];
// personOne.worksGrades = [45, 45];
// console.log("Soma de todas as notas da personOne: ", personOne.sumGrades());
// console.log(
//   "Média de todas as notas da personOne: ",
//   personOne.sumAvarageGrade()
// );

// personTwo.examsGrades = [26, 21, 24, 24];
// personTwo.worksGrades = [47, 47];
// console.log("Soma de todas as notas da personTwo: ", personTwo.sumGrades());
// console.log(
//   "Média de todas as notas da personTwo: ",
//   personTwo.sumAvarageGrade()
// );

//Para testar a class Person!
const maria = new Person("Maria da Consolação", new Date("1980/01/25"));
console.log(maria);

const luiza = new Person("Maria Andrade", new Date("2005/10/02"));
console.log(luiza);

// deve retornar erro
// const invalidPersonName = new Person('An', new Date('2000/06/07'));
// deve retornar erro
// const invalidPersonAge = new Person('Ana Vitória', new Date('1900/06/07'));

//Para testar a class Student extends Person!
const carolina = new Student("Carolina da Silva", new Date("2005/03/17"));
const lucas = new Student("Lucas Peixoto Salgueiro", new Date("2006/07/19"));
const jessica = new Student("Jéssica Bianca Nunes", new Date("2004/06/06"));
const tamires = new Student("Tamires Santos Bastos", new Date("2005/11/05"));
const fernando = new Student("Fernando Gonçalves", new Date("2006/09/11"));

carolina.examsGrades = [25, 20, 25, 23];
lucas.examsGrades = [25, 20, 25, 23];
jessica.worksGrades = [50, 45];
tamires.worksGrades = [47, 42];

console.log(carolina);
console.log(lucas);
console.log(jessica);
console.log(tamires);
console.log(fernando);

// deve retornar erro
// fernando.worksGrades = [45, 45, 45];

//Para testar uma Interface de Employee
const testInterfaceEmployee: Employee = {
  registration: "FNC1234567891011",
  salary: 1200.0,
  admissionDate: new Date(),

  generateRegistration(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(
      /\W/g,
      ""
    );

    return `FNC${randomStr}`;
  },
};

console.log(testInterfaceEmployee);

//Para testar a class Subject!
const math = new Subject("Matemática");
const story = new Subject("História");
const philosophy = new Subject("Filosofia");

console.log(math);
console.log(story);
console.log(philosophy);

// deve retornar erro
// const invalidSubjectName = new Subject('Po');

//Para testar a class Teacher!
const math2 = new Subject("Matemática");
const history = new Subject("História");
const philosophy2 = new Subject("Filosofia");

const marta = new Teacher(
  "Marta da Silva",
  new Date("1980/03/30"),
  2000,
  math2
);
const joao = new Teacher(
  "João Antônio da Costa",
  new Date("1982/04/21"),
  2000,
  history
);
const lucio = new Teacher(
  "Lucio Teixeira",
  new Date("1986/01/29"),
  2000,
  philosophy2
);

console.log(marta);
console.log(joao);
console.log(lucio);

// deve retornar erro
//const invalidTeacherSalary = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math2);

// deve retornar erro
// const today = new Date();
// today.setDate(today.getDate() + 1)
// const tomorrow = today;
// marta.admissionDate = tomorrow;
