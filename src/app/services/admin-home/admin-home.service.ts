import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUsers} from "../../models/User-model";

const endPoint = 'http://localhost:9094/api/admin'

@Injectable({
  providedIn: 'root'
})
export class AdminHomeService {

  headers = new HttpHeaders({
    'Authorization': 'Bearer ' + window.localStorage.getItem("token"),
  })

  constructor(public http: HttpClient) {
  }

  getLastWeekUsers(): Observable<HttpResponse<IUsers[]>> {
    return this.http.get<IUsers[]>(endPoint + '/last-week-users', {observe: 'response', headers: this.headers})
  }

  getAllUsersShowByMonth(): Observable<HttpResponse<IUsers[]>> {
    return this.http.get<IUsers[]>(endPoint + '/users-month', {observe: 'response', headers: this.headers})
  }

  getActiveUsers(): Observable<HttpResponse<IUsers[]>> {
    return this.http.get<IUsers[]>(endPoint + '/active-users', {observe: 'response', headers: this.headers})
  }
}
