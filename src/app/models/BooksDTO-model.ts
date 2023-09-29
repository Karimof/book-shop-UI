import {IAuthor} from "./Author-model";

export interface IBookDTO {
  id?: number;
  name?: string;
  author?: IAuthor;
  createdAt?: string;
  viewCount?: string;
  image?: any;
  price?: number
}

export class BookDTO implements IBookDTO {
  constructor(
    id?: number,
    name?: string,
    author?: IAuthor,
    createdAt?: string,
    viewCount?: string,
    image?: any,
    price?: number
  ) {
  }
}
