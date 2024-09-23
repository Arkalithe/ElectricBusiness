import { User } from './user';

export class UserReview {
  constructor(
    public id: number,
    public content: string,
    public rating: number,
    public createdAt: Date,
    public userFrom: User,
    public userTo: User,
  ) {}
}
