import { ChargingStation } from './charginStation';
import { User } from './user';

export interface Review {

  chargingStation: ChargingStation,
  content: string,
  rating: number,
  createdAt: Date,
  user: User,
  id: number,
  slug: string,

}
