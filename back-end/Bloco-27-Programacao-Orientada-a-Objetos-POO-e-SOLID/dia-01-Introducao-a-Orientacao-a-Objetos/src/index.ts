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
