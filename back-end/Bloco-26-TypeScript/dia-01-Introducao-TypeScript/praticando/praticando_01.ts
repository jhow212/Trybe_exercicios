let yes: boolean = true;
let no: boolean = false;

let x: number;
let y: number = 0;
let z: number = 123.456;

let s: string;
let empty: string = "";
let abc: string = "abc";

function sayHelloWorld(): void {
  console.log("Hello World!");
}

let nullValue = null;
let undefinedValue = undefined;

let flag = true;
const numberPI = 3.1416;
let message = "Hello World!";

//enum

enum StudentStatus {
  Active,
  Inactive,
  Paused,
}

let newStudentStatus: StudentStatus = StudentStatus.Inactive;
console.log(newStudentStatus);

const enum StatusCodes {
  OK = 200,
  BadRequest = 400,
  Unauthorized,
  PaymentRequired,
  Forbidden,
  NotFound,
}

const ok = StatusCodes.OK;
const indiceOk = StatusCodes["OK"];
// const stringBadRequest = StatusCodes[400];

console.log(ok); //saída: 200
console.log(indiceOk); //saída: 200
// console.log(stringBadRequest); //saída: BadRequest
