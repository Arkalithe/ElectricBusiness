import { UserModele } from './user.modele';

export interface UserReviewModele {
  id: number;
  content: string;
  rating: number;
  createdAt: Date;
  userFrom: UserModele;
  userTo: UserModele;
}
