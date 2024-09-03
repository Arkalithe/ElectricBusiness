import {User} from "./user";
import {Localisation} from "./localisation";

export class UserLocalisation {
  constructor(
    public isBilling: boolean,
    public user: User,
    public localisation: Localisation
  ) {
  }
}
