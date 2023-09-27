export interface IAuthor {
  id?: number;
  name?: string;
  login?: string;
  password?: string;
  createdAt?: Date;
}

export class Author implements IAuthor {
  constructor(
    public id?: number,
    public name?: string,
    public login?: string,
    public password?: string,
    public createdAt?: Date
  ) {}
}
