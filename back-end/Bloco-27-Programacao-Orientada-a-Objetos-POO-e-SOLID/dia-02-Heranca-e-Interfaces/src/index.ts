import Animal from "./Classes/Classes_Animals/classe.animal";
import Bird from "./Classes/Classes_Animals/classe.bird";
import Mammal from "./Classes/Classes_Animals/classe.mammal";
import SalesContract from "./Classes/Classes_SalesContracts_and_Signatories/classe.sales.contract";
import MyClass from "./Classes/Classes_Testes/classe.my.class";
import Subclass from "./Classes/Classes_Testes/classe.subClass";
import Superclass from "./Classes/Classes_Testes/classe.superClass";
import LegalPerson from "./Classes/Classe_Persons/classe.legal.person";
import NaturalPerson from "./Classes/Classe_Persons/classe.natural.person";

const tiger = new Mammal("Tigre", new Date(Date.parse("September 03, 2020")));

const main = (animal: Animal): void => {
  console.log(animal.age);
};

main(tiger);
tiger.walk();

const parrot = new Bird("Papagaio", new Date(Date.parse("Jun 07, 2017")));

console.log(parrot.age);
parrot.fly();
const myFunc = (obj: Superclass): void => {
  obj.sayHello();
  console.log(obj.isSuper ? "Super!" : "Sub!");
};

const sup = new Superclass();
const sub = new Subclass();

myFunc(sup);
myFunc(sub);

const myObject = new MyClass(2);

console.log(myObject.myNumber);
console.log(myObject.myFunc(4));

const s1 = new SalesContract();
const pp1 = new NaturalPerson("Tony", "123456789");
const pp2 = new NaturalPerson("Lilly", "987654321");
const lp = new LegalPerson("International Sales SA", "23961237162378");

s1.describe();
s1.addClause("Foo");
s1.addClause("Bar");
s1.describe();
s1.sign(pp1);
s1.sign(pp2);
s1.describe();
s1.addClause("Baz");
s1.sign(lp);
s1.describe();
