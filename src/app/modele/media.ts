import { ChargingStation } from './charginStation';

export class Media {
  constructor(
    public uuid: string,
    public name: string,
    public extension: string,
    public url: string,
  ) {}
}
