export default class Tv {
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
