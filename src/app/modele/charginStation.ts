import { Localisation } from './localisation';
import { Review } from './review';
import { Media } from './media';
import { Favorite } from './favorite';

export class ChargingStation {
  constructor(
    public uuid: string,
    public name: string,
    public location: Localisation,
    public type: string,
    public availability: boolean,
    public pricePerHour: number,
    public created: Date,
    public slug: string,
    public medias?: Media[],
    public reviews?: Review[],
    public favorites?: Favorite[],
  ) {}
}
