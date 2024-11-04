import { User } from './user';
import { ChargingStation } from './charginStation';

export interface UserStation {
    user: User,
    station: ChargingStation,
}
