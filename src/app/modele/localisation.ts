import {User} from "./user";

export interface Localisation {
  id: number;
  streetNumber: string;
  streetName: string;
  latitude: string;
  longitude: string;
  zipCode: string;
  city: string;
  owner: User;
}
