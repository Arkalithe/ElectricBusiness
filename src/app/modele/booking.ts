import { ChargingStation } from './charginStation';
import { User } from './user';

export interface Booking {
  uuid: string,
  startedAt: Date,
  finishedAt: Date,
  status: string,
  user: User,
  chargingStation: ChargingStation,
  slug: string,

}
