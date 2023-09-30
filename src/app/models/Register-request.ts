export interface IRegisterRequest {
  name?: string;
  login?: string;
  password?: string;
  role?: string;
}

export class RegisterRequest implements IRegisterRequest {
  constructor(
    public name?: string,
    public login?: string,
    public password?: string,
    public role?: string
  ) {}
}
