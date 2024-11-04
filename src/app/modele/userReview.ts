import { User } from './user';

export interface UserReview {
    id: number,
    content: string,
    rating: number,
    createdAt: Date,
    userFrom: User,
    userTo: User
}
