import { BookingModele } from './booking.modele';
import { UserModele } from './user.modele';

export class PaymentModele {
  constructor(
    public id: number,
    public amount: number,
    public paymentMethod: string,
    public paymentStatus: string,
    public booking: BookingModele,
    public slug: string,
    public user?: UserModele,
  ) {}
}
