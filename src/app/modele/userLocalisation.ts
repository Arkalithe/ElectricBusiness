import { User } from './user';
import { Localisation } from './localisation';

export interface UserLocalisation {
    isBilling: boolean,
    user: User,
  localisation: Localisation,
}
