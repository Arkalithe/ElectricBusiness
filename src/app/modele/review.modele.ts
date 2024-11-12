import { ChargingStation } from './charginStation.modele';
import { UserModele } from './user.modele';

export interface ReviewModele {
  chargingStation: ChargingStation;
  content: string;
  rating: number;
  createdAt: Date;
  user: UserModele;
  id: number;
  slug: string;
}
