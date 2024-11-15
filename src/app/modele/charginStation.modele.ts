import { LocalisationModele } from './localisation.modele';
import { MediaModele } from './media.modele';
import { PowerModele } from './power.modele';
import { HourlyRateModele } from './hourlyRate.modele';

export interface ChargingStation {
  id: string;
  name: string;
  hourlyRate?: number;
  baseHourlyRate?: number;
  accessDirectives: string;
  onFoot: boolean;
  createdAt: Date;
  updateAt?: Date;
  power: PowerModele;
  localisation: LocalisationModele;
  powerId?: number;
  localisationId?: number;
  city?: string;
  zipCode?: string;
  streetName?: string;
  value?: number;
  mediaList: MediaModele[];
  hourlyRates: HourlyRateModele[];
}
