import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUsers} from "../../models/User-model";
import {IAuthResponse} from "../../models/Auth-response-model";
import {IRegisterRequest} from "../../models/Register-request";

const endPoint = 'http://localhost:9094/api/v1/auth'

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(protected http: HttpClient) {
  }

  register(registerRequest: IRegisterRequest): Observable<HttpResponse<IAuthResponse>> {
    return this.http.post(endPoint + '/register', registerRequest, {observe: 'response'})
  }

  login(user: IUsers): Observable<HttpResponse<IAuthResponse>> {
      return this.http.post(endPoint + '/authenticate', user, {observe: 'response'})
  }

  logout() {
    return this.http.post(endPoint + '/logout', {observe: 'response'})
  }
}
