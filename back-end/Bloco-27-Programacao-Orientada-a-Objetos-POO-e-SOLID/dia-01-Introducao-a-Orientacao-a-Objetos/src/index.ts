import Email from "./classe.email";
import MailList from "./classe.lista.email";
import Person from "./classe.person";
import Tv from "./classe.tv";

const p1 = new Person("tores", 171, 58, 19);
const p2 = new Person("João", 175, 66, 18);

//Alterando diretamente o name que é publico
p1.name = "Mariah";
console.log(p1.name);
p2.name = "João Vitor";
console.log(p2.name);

//Acessando o metodo publico que manipula um atributo privado
console.log(`${p1.name}: ${p1.getWeight()}`);
console.log(`${p2.name}: ${p2.getWeight()}`);

//Acessando o metodo com getter para manipular um atributo privado como se fosse privado
console.log(`${p1.name}: ${p1.age}`);
console.log(`${p2.name}: ${p2.age}`);

//Acessando um metodo publico que manipula um objeto privado
p1.birthday();
console.log(`${p1.name}: ${p1.age}`);
p2.birthday();
console.log(`${p2.name}: ${p2.age}`);

//Acessando um metodo setter para manipular um atributo privado como se fosse publico
p1.age = 17;
console.log(`${p1.name}: ${p1.age}`);
p2.age = 18;
console.log(`${p2.name}: ${p2.age}`);

//Leitura de atributo readonly
console.log(`${p1.name}: ${p1.height}`);
console.log(`${p2.name}: ${p2.height}`);

const tv1 = new Tv("LG", 62, "4K", ["HDMI", "Ethernet", "WI-FI"]);
tv1.tornOn();

//Testando a classe Email e a classe que controla o Array de emails
const friendEmail = "friend@personalmail.com";
const myEmail = "me@personalmail.com";

const email1 = new Email(
  myEmail,
  friendEmail,
  "Lava-jato",
  "Há uma nova lavagem de carros na cidade. Você sabia?"
);

const email2 = new Email(
  friendEmail,
  myEmail,
  "Responder - Lava-jato",
  "Excelente! Meu carro está muito sujo. Quanto eles cobram?"
);

const email3 = new Email(
  myEmail,
  friendEmail,
  "Responder - Responder - Lava-jato",
  "$ 5,00, e você ganha um pano de polimento grátis"
);

const email4 = new Email(
  "me@companymail.com",
  "ceo@companymail.com",
  "Dia de folga segunda-feira",
  `A próxima terça-feira é feriado.
  Vamos trabalhar na segunda-feira?`
);

const email5 = new Email(
  "ceo@companymail.com",
  "me@companymail.com",
  "Responder - Dia de folga segunda-feira",
  "Toda a empresa terá folga na segunda-feira =D"
);

const personalMailList = new MailList([email1, email2, email3]);
const professionalMailList = new MailList([email4, email5]);

console.log("------ personalMailList.getByEmailFrom('me@personalmail.com'):");
personalMailList
  .getEmailsSentBy(myEmail)
  .forEach((mail: Email): void => console.log(mail.content));

const email6 = new Email(
  myEmail,
  "friend2@personalmail.com",
  "Dia de folga segunda-feira",
  `Oh sim!
  Meu chefe diz que teremos segunda-feira de folga.
  Quer ir ao cinema?`
);

personalMailList.addEmail(email6);
personalMailList.addEmail(email5); //Adcionando sem precisar para exemplo

console.log("------ personalMailList.getBySubject('Day off'):");
personalMailList
  .getEmailsBySubject("Day off")
  .forEach((mail: Email): void => console.log(mail.content));

personalMailList.removeEmail(email5);

console.log("------ professionalMailList.all:");
professionalMailList.all.forEach((mail: Email): void =>
  console.log(mail.content)
);
console.log("------ personalMailList.all:");
personalMailList.all.forEach((mail: Email): void => console.log(mail.content));
