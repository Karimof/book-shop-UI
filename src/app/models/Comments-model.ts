import {IBook} from "./Books-model";
import {IUsers} from "./User-model";

export interface IComments {
  id?: number;
  books?: IBook;
  users?: IUsers;
  content?: string;
  createdAt?: Date;
}

export class Comments implements IComments {
  constructor(
    id?: number,
    books?: IBook,
    users?: IUsers,
    content?: string,
    createdAt?: Date
  ) {
  }
}
