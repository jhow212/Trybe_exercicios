import { Point } from "./types";

//Arrays
let names: Array<string> = ["Mary Joe", "Alan Joe"];
//ou
let names2: string[] = ["Mary Joe", "Alan Joe"];

//Tuplas
let fullName: [string, string] = ["Jane", "Doe"];
let person: [string, number] = ["Jane Doe", 35];
let car: [string, string, number] = ["Ford", "F400", 10];
//não é uma tupla
let notTupla: Array<string | number> = ["Jane Doe", 35];

//usando types aliases
const printCoord = (pt: Point): void => {
  console.log("O valor da cordenada x é" + pt.x);
  console.log("O valor da cordenada y é" + pt.y);
};

printCoord({ x: 100, y: 100 });

//types unions ou união de types
const retornaCPF = (cpf: number | string): void => {
  console.log("Seu CPF é:" + cpf);
};
