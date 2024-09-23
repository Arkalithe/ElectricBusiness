import {Localisation} from "../modele/localisation";
import {ChargingStation} from "../modele/charginStation";
import {User} from "../modele/user";
import {UserLocalisation} from "../modele/userLocalisation";
import {Booking} from "../modele/booking";
import {Review} from "../modele/review";
import {Favorite} from "../modele/favorite";
import {Media} from "../modele/media";
import {UserReview} from "../modele/userReview";
import {UserStation} from "../modele/userStation";
import {Payment} from "../modele/payment";
import {Invoice} from "../modele/invoice";
import {Notifications} from "../modele/notification";

const loc1 = new Localisation(1, "Texas", "Denver", "Hamilton", "123", 20.25, 12.5, "fdsf");
const loc2 = new Localisation(2, "California", "Los Angeles", "Sunset Blvd", "456", 30.50, 10.5, "faaaaasf");
const loc3 = new Localisation(3, "New York", "Brooklyn", "Flatbush Ave", "789", 40.75, 122.5, "fdbbbbsf");

const station1 = new ChargingStation("1", "Station A", loc1, "Type 2", true, 3.50, new Date(), "aze");
const station2 = new ChargingStation("2", "Station B", loc2, "CCS", false, 4.00, new Date(), "azeaze");
const station3 = new ChargingStation("3", "Station C", loc2, "Type 2", true, 5.00, new Date(),"azefz");
const station4 = new ChargingStation("4", "Station D", loc3, "CHAdeMO", true, 6.00, new Date(),"azeqsd");

const user1 = new User("user1", "abc@abc.abc", "Polnaref", "Jean", "abc", "admin", "00-11-22-33-44", "token123", true, "aze");
const user2 = new User("user2", "test2@test.test", "Dio", "Brando", "user", "regular", "11-22-33-44-55", "token456", true, "aze");
const user3 = new User("user3", "test3@test.test", "Jotaro", "Kujo", "user", "regular", "22-33-44-55-66", "token789", true,"aze");

const userLoc1 = new UserLocalisation(true, user1, loc1);
const userLoc2 = new UserLocalisation(false, user2, loc2);
const userLoc3 = new UserLocalisation(true, user3, loc3);

const userStation1 = new UserStation(user1, station1);
const userStation2 = new UserStation(user2, station2);
const userStation3 = new UserStation(user2, station3);
const userStation4 = new UserStation(user3, station4);

const booking1 = new Booking("book1", new Date(), new Date(), "completed", user1, station1,"aze");
const booking2 = new Booking("book2", new Date(), new Date(), "in-progress", user2, station2,"aze");
const booking3 = new Booking("book3", new Date(), new Date(), "cancelled", user3, station4,"aze");

const review1 = new Review(1, "Great station!", 5, new Date(), user1,"aze", station1,);
const review2 = new Review(2, "Okay station.", 3, new Date(), user2,"aze", station2);
const review3 = new Review(3, "Fast charging!", 4, new Date(), user3,"aze", station4);

const favorite1 = new Favorite(1, new Date(), user1, station1);
const favorite2 = new Favorite(2, new Date(), user2, station2);
const favorite3 = new Favorite(3, new Date(), user3, station4);

const media1 = new Media("media1", "photo1", "jpg", "station1");
const media2 = new Media("media2", "photo2", "png", "station2");
const media3 = new Media("media3", "photo3", "jpg", "station3");

const userReview1 = new UserReview(1, "Great user!", 5, new Date(), user1, user2);
const userReview2 = new UserReview(2, "Average user.", 3, new Date(), user2, user1);
const userReview3 = new UserReview(3, "Helpful user.", 4, new Date(), user3, user1);

const payment1 = new Payment(1, 250, "CB", "Payed", booking1,"aze", user1);
const payment2 = new Payment(2, 300, "PayPal", "Payed", booking2,"aze", user2);
const payment3 = new Payment(3, 400, "CreditCard", "Pending", booking3,"aze", user3);

const invoice1 = new Invoice(1, new Date(), new Date(), 250, "Payed", payment1, new Date());
const invoice2 = new Invoice(2, new Date(), new Date(), 300, "Payed", payment2, new Date());
const invoice3 = new Invoice(3, new Date(), new Date(), 400, "Pending", payment3, new Date());

const notification1 = new Notifications(1, "Management Location", "You have some location waiting to be accepted", "See");
const notification2 = new Notifications(2, "Booking Reminder", "Your booking is in 1 hour", "Check");
const notification3 = new Notifications(3, "Review Needed", "Please review your recent charging station visit", "Review");


export const USERS: User[] = [user1, user2, user3];
export const BOOKINGS: Booking[] = [booking1, booking2, booking3];
export const REVIEWS: Review[] = [review1, review2, review3];
export const FAVORITES: Favorite[] = [favorite1, favorite2, favorite3];
export const USER_LOCALISATIONS: UserLocalisation[] = [userLoc1, userLoc2, userLoc3];
export const MEDIAS: Media[] = [media1, media2, media3];
export const USER_REVIEWS: UserReview[] = [userReview1, userReview2, userReview3];
export const CHARGING_STATIONS: ChargingStation[] = [station1, station2, station3, station4];
export const LOCALISATIONS: Localisation[] = [loc1, loc2, loc3];
export const USER_STATION: UserStation[] = [userStation1, userStation2, userStation3, userStation4];
export const PAYMENT: Payment[] = [payment1, payment2, payment3];
export const NOTIFICATIONS: Notifications[] = [notification1, notification2, notification3];
export const INVOICE: Invoice[] = [invoice1, invoice2, invoice3];
