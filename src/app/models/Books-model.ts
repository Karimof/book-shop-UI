import {IAuthor} from "./Author-model";

export interface IBook {
  id?: number;
  name?: string;
  author?: IAuthor;
  createdAt?: string;
  viewCount?: string;
  image?: any;
}

export class Book implements IBook {
  constructor(
    id?: number,
    name?: string,
    author?: IAuthor,
    createdAt?: string,
    viewCount?: string,
    image?: any
  ) {
  }
}
