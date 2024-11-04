import {Localisation} from "./localisation";
import {Media} from "./media";
import {Power} from "./power";
import {HourlyRate} from "./HourlyRate";

export interface ChargingStation {
  uuid: string;
  name: string;
  baseHourlyRate: number;
  accessDirectives: string;
  onFoot: boolean;
  createdAt: Date;
  updateAt?: Date;
  power: Power;
  localisation: Localisation;
  mediaList: Media[];
  hourlyRates: HourlyRate[];
}
