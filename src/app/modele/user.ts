import { UserLocalisation } from './userLocalisation';
import { Booking } from './booking';
import { Review } from './review';
import { Favorite } from './favorite';
import { Localisation } from './localisation';

export interface User {

  uuid: string,
  email: string,
  lastname: string,
  firstname: string,
  password: string,
  role: string,
  phoneNumber: string,
  activationToken: string,
  isVerified: boolean,
  slug: string,
  userFrom?: User[],
  userTo?: User[],
  reviews?: Review[],
  bookings?: Booking[],
  Localisation?: Localisation[],
  userLocalisations?: UserLocalisation[],
  favorites?: Favorite[],

}
