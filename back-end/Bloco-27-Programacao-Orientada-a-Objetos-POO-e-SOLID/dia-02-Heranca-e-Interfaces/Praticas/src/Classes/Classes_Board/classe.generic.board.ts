import { Board, Database } from "../../interfaces/my.interface";

export default class GenericBoard implements Board {
  constructor(public houses: string[], protected database: Database) {}

  public save(): void {
    this.database.save(this.houses);
  }
}
