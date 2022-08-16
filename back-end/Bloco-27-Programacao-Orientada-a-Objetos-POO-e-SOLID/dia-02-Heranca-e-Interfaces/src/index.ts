import Animal from "./classe.animal";
import Bird from "./classe.bird";
import Mammal from "./classe.mammal";
import MyClass from "./classe.my.class";
import Subclass from "./classe.subClass";
import Superclass from "./classe.superClass";

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
