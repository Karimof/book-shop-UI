import {IBook} from "./Books-model";
import {IUsers} from "./User-model";

export interface IUserPurchases {
  id?: number;
  books?: IBook;
  users?: IUsers;
  price?: number;
  createdAt?: Date;
}

export class UserPurchases implements IUserPurchases {
  constructor(
    id?: number,
    books?: IBook,
    users?: IUsers,
    price?: number,
    createdAt?: Date
  ) {
  }
}
