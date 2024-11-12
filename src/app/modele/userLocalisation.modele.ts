import { UserModele } from './user.modele';
import { LocalisationModele } from './localisation.modele';

export interface UserLocalisationModele {
  isBilling: boolean;
  user: UserModele;
  localisation: LocalisationModele;
}
