import { ChargingStation } from './charginStation.modele';
import { UserModele } from './user.modele';

export interface BookingModele {
  uuid: string;
  startedAt: Date;
  finishedAt: Date;
  status: string;
  user: UserModele;
  chargingStation: ChargingStation;
  slug: string;
}
