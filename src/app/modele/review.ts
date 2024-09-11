import { ChargingStation } from './charginStation';
import { User } from './user';

export class Review {
  constructor(
    public id: number,
    public content: string,
    public rating: number,
    public createdAt: Date,
    public user: User,
    public slug: string,
    public chargingStation: ChargingStation,
  ) {}
}
