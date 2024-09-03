import {UserLocalisation} from "./userLocalisation";
import {Booking} from "./booking";
import {Review} from "./review";
import {Favorite} from "./favorite";
import {Localisation} from "./localisation";

export class User {
  constructor(
    public uuid: string,
    public email: string,
    public name: string,
    public password: string,
    public role: string,
    public activationToken: string,
    public isVerified: boolean,
    public userFrom?: User[],
    public userTo?: User[],
    public reviews?: Review[],
    public bookings?: Booking[],
    public userLocalisations?: UserLocalisation[],
    public favorites?: Favorite[]
  ) {
  }
}
