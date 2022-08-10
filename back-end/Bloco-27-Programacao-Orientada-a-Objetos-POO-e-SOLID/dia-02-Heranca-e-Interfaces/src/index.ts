import Animal from "./classe.animal";
import Bird from "./classe.bird";
import Mammal from "./classe.mammal";

const tiger = new Mammal("Tigre", new Date(Date.parse("September 03, 2020")));

const main = (animal: Animal): void => {
  console.log(animal.age);
};

main(tiger);
tiger.walk();

const parrot = new Bird("Papagaio", new Date(Date.parse("Jun 07, 2017")));

console.log(parrot.age);
parrot.fly();
