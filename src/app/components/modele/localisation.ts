import {UserLocalisation} from "./userLocalisation";
import {ChargingStation} from "./charginStation";

export class Localisation {
  constructor(
    public number: string,
    public streetName: string,
    public latitude: number,
    public chargingStations?: ChargingStation[],
    public userLocalisations?: UserLocalisation[]
  ) {}
}
