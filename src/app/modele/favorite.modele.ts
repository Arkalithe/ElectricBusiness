import { ChargingStation } from './charginStation.modele';
import { UserModele } from './user.modele';

export interface FavoriteModele {
  id: number;
  createdAt: Date;
  user: UserModele;
  chargingStation: ChargingStation;
}
