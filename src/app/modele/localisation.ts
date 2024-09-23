import { UserLocalisation } from './userLocalisation';
import { ChargingStation } from './charginStation';

export class Localisation {
  constructor(
    public id: number,
    public country: string,
    public city: string,
    public streetName: string,
    public number: string,
    public latitude: number,
    public longitude: number,
    public slug: string,
    public chargingStations?: ChargingStation[],
    public userLocalisations?: UserLocalisation[],
  ) {}
}
