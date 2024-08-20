import {UserLocalisation} from "./userLocalisation";
import {Booking} from "./booking";
import {Review} from "./review";
import {Favorite} from "./favorite";

export class User {
  constructor(
    public uuid: string,
    public activationToken: string,
    public isVerified: boolean,
    public userFrom?: User[],
    public userTo?: User[],
    public reviews?: Review[],
    public bookings?: Booking[],
    public userLocalisations?: UserLocalisation[],
    public favorites?: Favorite[]
  ) {}
}
