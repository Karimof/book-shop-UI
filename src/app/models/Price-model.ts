import {IBook} from "./Books-model";

export interface IPrice {
  id?: number;
  books?: IBook;
  price?: number;
}

export class Price implements IPrice {
  constructor(
    id?: number,
    books?: IBook,
    price?: number,
  ) {
  }
}
