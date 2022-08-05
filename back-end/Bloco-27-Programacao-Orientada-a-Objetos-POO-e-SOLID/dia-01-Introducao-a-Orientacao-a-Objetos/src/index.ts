class Person {
  public name: string;
  public height: number;
  public weight: number;

  constructor(n: string, h: number, w: number) {
    console.log(`Creating person ${n}`);
    this.name = n;
    this.height = h;
    this.weight = w;
  }

  sleep(): void {
    console.log(`${this.name}: zzzzzzz`);
  }
}

const p1 = new Person("tores", 171, 58);
const p2 = new Person("João", 175, 66);
console.log(p1.name, p1.height, p1.weight);
console.log(p2.name, p2.height, p2.weight);
p1.sleep();
p2.sleep();

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
