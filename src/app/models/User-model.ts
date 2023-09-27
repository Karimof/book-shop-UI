export interface IUsers {
  id?: number;
  name?: string;
  login?: string;
  password?: string;
}

export class Users implements IUsers {
  constructor(
    public id?: number,
    public name?: string,
    public login?: string,
    public password?: string
  ) {}
}
