import {Injectable} from "@angular/core";
import {InMemoryDbService} from "angular-in-memory-web-api";
import {
  USERS,
  BOOKINGS,
  REVIEWS,
  FAVORITES,
  USER_LOCALISATIONS,
  MEDIAS,
  USER_REVIEWS,
  CHARGING_STATIONS,
  LOCALISATIONS, PAYMENT, INVOICE, NOTIFICATIONS
} from "../mockUp/mock-up";


@Injectable({
  providedIn: "root",
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = USERS;
    const bookings = BOOKINGS;
    const reviews = REVIEWS;
    const favorites = FAVORITES;
    const userLocalisations = USER_LOCALISATIONS;
    const medias = MEDIAS;
    const userReviews = USER_REVIEWS;
    const chargingStations = CHARGING_STATIONS;
    const localisations = LOCALISATIONS;
    const payment = PAYMENT;
    const invoice = INVOICE;
    const notification = NOTIFICATIONS;


    return {
      users,
      bookings,
      reviews,
      favorites,
      userLocalisations,
      medias,
      userReviews,
      chargingStations,
      localisations,
      payment,
      invoice,
      notification
    };
  }
}
