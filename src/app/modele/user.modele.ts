import { UserLocalisationModele } from './userLocalisation.modele';
import { BookingModele } from './booking.modele';
import { ReviewModele } from './review.modele';
import { FavoriteModele } from './favorite.modele';
import { LocalisationModele } from './localisation.modele';

export interface UserModele {
  uuid?: string;
  email: string;
  lastname: string;
  firstname: string;
  password: string;
  confirmPassword?: string;
  role?: string;
  phone: string;
  activationToken?: string;
  isVerified?: boolean;
  slug?: string;
  birthedAt?: string;
  userTo?: UserModele[];
  reviews?: ReviewModele[];
  bookings?: BookingModele[];
  Localisation?: LocalisationModele[];
  userLocalisations?: UserLocalisationModele[];
  favorites?: FavoriteModele[];
  createdAt?: string;
}

export interface Login {
  email: string;
  password: string;
}
