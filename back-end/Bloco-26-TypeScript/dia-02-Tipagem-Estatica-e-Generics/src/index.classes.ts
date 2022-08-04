enum EyeColor {
  Black = "Pretos",
  Blue = "Azuis",
  Green = "Verdes",
  Browm = "Castanhos",
}

class Person {
  name: string;
  birthDate: Date;
  eyeColor?: EyeColor;

  constructor(name: string, birthDate: Date, eyeColor: EyeColor) {
    this.name = name;
    this.birthDate = birthDate;
    this.eyeColor = eyeColor;
  }

  speak(): void {
    console.log(`${this.name} está falando.`);
  }

  eat(): void {
    console.log(`${this.name} está comendo.`);
  }

  walk(): void {
    console.log(`${this.name} está andando.`);
  }
}

const person1 = new Person("Jane Doe", new Date("1986-01-01"), EyeColor.Browm);
const person2 = new Person("Jon Doe", new Date("1980-08-05"), EyeColor.Black);

console.log(person1);
person1.speak();
// saída:
// Person: {
//   "name": "Jane Doe",
//   "birthDate": "1986-01-01T00:00:00.000Z",
//   "eyeColor": "Castanhos"
// }
// "Jane Doe está falando."

console.log(person2);
person2.walk();
// saída:
// Person: {
//   "name": "Jon Doe",
//   "birthDate": "1980-08-05T00:00:00.000Z",
//   "eyeColor": "Pretos"
// }
// "Jon Doe está andando."

//EXERCÍCIOS

class Hero {
  nome: string;
  poder: string;
  constructor(nome: string, poder: string) {
    this.nome = nome;
    this.poder = poder;
  }

  falarFraseInspiradora(frase: string): string {
    return `${this.nome} diz: ${frase} enquanto usa o poder da ${this.poder}`;
  }
}

const hero1 = new Hero("Leon", "Gambiarra");

console.log(hero1);
console.log(
  hero1.falarFraseInspiradora(
    "gambiarra a gente aceita oque a gnt não aceita é a derrota"
  )
);
