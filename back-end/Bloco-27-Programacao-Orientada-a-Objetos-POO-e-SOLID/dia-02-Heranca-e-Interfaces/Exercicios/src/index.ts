import Person from "./Classes/classe.person";
// import Student from "./Classes/classe.student";

// //Para testar o Student!
// const personOne = new Student("202001011", "Maria da Silva");
// console.log(personOne);

// const personTwo = new Student("202001012", "João da Silva");
// console.log(personTwo);

// //Para testar o Student!
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

//Para testar o Person!
const maria = new Person("Maria da Consolação", new Date("1980/01/25"));
console.log(maria);

const luiza = new Person("Maria Andrade", new Date("2005/10/02"));
console.log(luiza);

// deve retornar erro
// const invalidPersonName = new Person('An', new Date('2000/06/07'));
// deve retornar erro
// const invalidPersonAge = new Person('Ana Vitória', new Date('1900/06/07'));
