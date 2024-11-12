import { UserModele } from './user.modele';

export interface LocalisationModele {
  id: number;
  streetNumber: string;
  streetName: string;
  latitude: string;
  longitude: string;
  zipCode: string;
  city: string;
  owner: UserModele;
}
