import {ChargingStation} from "../modele/charginStation";
import {Localisation} from "../modele/localisation";


const loc1 = new Localisation("123", "Main St", 12.34);
const loc2 = new Localisation("456", "Oak Ave", 56.78);

export const CHARGING_STATIONS: ChargingStation[] = [
  new ChargingStation(
    "1",
    "Station A",
    loc1,
    "Type 2",
    true,
    3.50,
    new Date()
  ),
  new ChargingStation(
    "2",
    "Station B",
    loc2,
    "CCS",
    false,
    4.00,
    new Date()
  ),
];
