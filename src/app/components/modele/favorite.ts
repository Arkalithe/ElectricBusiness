import {ChargingStation} from "./charginStation";
import {User} from "./user";

export class Favorite {
  constructor(
    public createdAt: Date,
    public user: User,
    public chargingStation: ChargingStation
  ) {}
}
