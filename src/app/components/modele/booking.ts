import {ChargingStation} from "./charginStation";
import {User} from "./user";

export class Booking {
  constructor(
    public uuid: string,
    public startedAt: Date,
    public finishedAt: Date,
    public status: string,
    public user: User,
    public chargingStation: ChargingStation
  ) {}
}
