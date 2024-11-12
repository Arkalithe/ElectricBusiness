import { UserLocalisationModele } from './userLocalisation.modele';
import { BookingModele } from './booking.modele';
import { ReviewModele } from './review.modele';
import { FavoriteModele } from './favorite.modele';
import { LocalisationModele } from './localisation.modele';

export interface UserModele {
  uuid: string;
  email: string;
  lastname: string;
  firstname: string;
  password: string;
  role: string;
  phoneNumber: string;
  activationToken: string;
  isVerified: boolean;
  slug: string;
  userFrom?: UserModele[];
  userTo?: UserModele[];
  reviews?: ReviewModele[];
  bookings?: BookingModele[];
  Localisation?: LocalisationModele[];
  userLocalisations?: UserLocalisationModele[];
  favorites?: FavoriteModele[];
}

export interface Login {
  email: string;
  password: string;
}
