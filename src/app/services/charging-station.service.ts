import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ChargingStation} from "../modele/charginStation";
import {CHARGING_STATIONS} from "../mockUp/mock-up";

@Injectable({
  providedIn: 'root'
})
export class ChargingStationService {
  private chargingStations = [...CHARGING_STATIONS];

  constructor() {
  }


  getChargingStations(): Observable<ChargingStation[]> {
    return of(this.chargingStations);
  }

  addChargingStation(station: ChargingStation) {
    this.chargingStations.push(station);
  }

  getChargingStationByUUId(uuid: string): Observable<ChargingStation | undefined> {
    const station = this.chargingStations.find(station => station.uuid === uuid);
    return of(station);
  }


}
