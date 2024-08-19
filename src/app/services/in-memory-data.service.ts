import { Injectable } from "@angular/core";
import {CHARGING_STATIONS} from "../components/mockUp/mock-charging-station-list";
import {InMemoryDbService} from "angular-in-memory-web-api";


@Injectable({
  providedIn: "root",
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const chargingStations = CHARGING_STATIONS;
    return { chargingStations };
  }}
