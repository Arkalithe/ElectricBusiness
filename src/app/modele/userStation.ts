import { User } from './user';
import { ChargingStation } from './charginStation';

export class UserStation {
  constructor(
    public user: User,
    public station: ChargingStation,
  ) {}
}
