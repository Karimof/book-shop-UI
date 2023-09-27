export interface IAuthResponse {
  token?: string;
}

export class AuthResponse implements IAuthResponse {
  constructor(
    public token?: string
  ) {}
}
