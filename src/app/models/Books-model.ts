import {IAuthor} from "./Author-model";

export interface IBook {
  id?: number;
  name?: string;
  author?: IAuthor;
  createdAt?: Date;
  viewCount?: string;
  //todo image ni file da o'zgartiramiz hali
  image?: string;
}

export class IBook implements IBook {
  constructor(
    id?: number,
    name?: string,
    author?: IAuthor,
    createdAt?: Date,
    viewCount?: string,
    image?: string
  ) {
  }
}
