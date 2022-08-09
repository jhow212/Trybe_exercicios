export default class Person {
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
