import Person from "./Classes/classe.person";
import Student from "./Classes/classe.student";
import Subject from "./Classes/classe.subject";
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
