import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {ChargingStation} from "../modele/charginStation";
import {CHARGING_STATIONS} from "../charging-station/mockUp/mock-charging-station-list";

@Injectable({
  providedIn: 'root'
})
export class ChargingStationService {

  constructor() { }


  getChargingStations(): Observable<ChargingStation[]> {
    return of(CHARGING_STATIONS);
  }

  getChargingStationByUUId(uuid: string): Observable<ChargingStation | undefined> {
    const station = CHARGING_STATIONS.find(station => station.uuid === uuid);
    return of(station);
  }


}
