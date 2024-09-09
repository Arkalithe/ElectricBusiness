import {Booking} from "./booking";
import {User} from "./user";


export class Payment {

  constructor(
    public id: number,
    public amount: number,
    public paymentMethod: string,
    public paymentStatus: string,
    public booking: Booking,
    public user?: User
    ) {
  }

}
