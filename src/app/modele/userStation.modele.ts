import { UserModele } from './user.modele';
import { ChargingStation } from './charginStation.modele';

export interface UserStationModele {
  user: UserModele;
  station: ChargingStation;
}
