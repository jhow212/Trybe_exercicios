import GenericBoard from "./classe.generic.board";
import { Database } from "../../interfaces/my.interface";

export default class ChessBoard extends GenericBoard {
  constructor(public houses: string[], protected database: Database) {
    super(houses, database);
  }
}
