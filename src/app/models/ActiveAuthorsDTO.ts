
export interface IActiveAuthors {
  id?: number;
  name?: string;
  booksCount?: number;
}

export class ActiveAuthors implements IActiveAuthors {
  constructor(
    id?: number,
    name?: string,
    booksCount?: number,
  ) {
  }
}
