class Person {
  public name: string;
  readonly height: number;
  private _weight: number;
  private _age: number;

  constructor(name: string, height: number, weight: number, age: number) {
    console.log(`Creating person ${name}`);
    this.name = name;
    this.height = height;
    this._weight = weight;
    this._age = age;
  }
  getWeight(): number {
    return this._weight;
  }

  get age(): number {
    return this._age;
  }

  set age(newValue: number) {
    if (newValue >= 0 && newValue < 200) {
      this._age;
    }
  }

  birthday(): void {
    this._age += 1;
  }

  sleep(): void {
    console.log(`${this.name}: zzzzzzz`);
  }
}

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

class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo?: string;

  constructor(
    brand: string,
    size: number,
    resolution: string,
    connections: string[]
  ) {
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
    this._brand = brand;
  }

  public tornOn(): void {
    console.log(
      `Tv ${this._brand}, ${this._size}", resolution ${this._resolution} \navailable connections: ${this._connections}`
    );
  }
}

const tv1 = new Tv("LG", 62, "4K", ["HDMI", "Ethernet", "WI-FI"]);
tv1.tornOn();
