import {Localisation} from "../modele/localisation";
import {ChargingStation} from "../modele/charginStation";
import {User} from "../modele/user";
import {UserLocalisation} from "../modele/userLocalisation";
import {Booking} from "../modele/booking";
import {Review} from "../modele/review";
import {Favorite} from "../modele/favorite";
import {Media} from "../modele/media";
import {UserReview} from "../modele/userReview";

const loc1 = new Localisation("123", "Main St", 12.34);
const loc2 = new Localisation("456", "Oak Ave", 56.78);

const station1 = new ChargingStation("1", "Station A", loc1, "Type 2", true, 3.50, new Date());
const station2 = new ChargingStation("2", "Station B", loc2, "CCS", false, 4.00, new Date());

const user1 = new User("user1", "test@test.test", "test", "test", "token123", true);
const user2 = new User("user2", "abc@abc.abc", "abc", "abc", "token456", false);

const userLoc1 = new UserLocalisation(true, user1, loc1);
const userLoc2 = new UserLocalisation(false, user2, loc2);


const booking1 = new Booking("book1", new Date(), new Date(), "completed", user1, station1);
const booking2 = new Booking("book2", new Date(), new Date(), "in-progress", user2, station2);

const review1 = new Review(1, "Great station!", 5, new Date(), user1, station1);
const review2 = new Review(2, "Okay station.", 3, new Date(), user2, station2);

const favorite1 = new Favorite(new Date(), user1, station1);
const favorite2 = new Favorite(new Date(), user2, station2);

const media1 = new Media("media1", "photo1", "jpg", station1);
const media2 = new Media("media2", "photo2", "png", station2);

const userReview1 = new UserReview(1, "Great user!", 5, new Date(), user1, user2);
const userReview2 = new UserReview(2, "Average user.", 3, new Date(), user2, user1);

export const USERS: User[] = [user1, user2];
export const BOOKINGS: Booking[] = [booking1, booking2];
export const REVIEWS: Review[] = [review1, review2];
export const FAVORITES: Favorite[] = [favorite1, favorite2];
export const USER_LOCALISATIONS: UserLocalisation[] = [userLoc1, userLoc2];
export const MEDIAS: Media[] = [media1, media2];
export const USER_REVIEWS: UserReview[] = [userReview1, userReview2];
export const CHARGING_STATIONS: ChargingStation[] = [station1, station2];
export const LOCALISATIONS: Localisation[] = [loc1, loc2];
