import { ChargingStation } from './charginStation';
import { User } from './user';

export interface Favorite {

  id: number,
  createdAt: Date,
  user: User,
  chargingStation: ChargingStation,

}
