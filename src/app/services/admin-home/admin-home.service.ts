import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUsers} from "../../models/User-model";
import {IActiveAuthors} from "../../models/ActiveAuthorsDTO";
import {IEarnedAuthors} from "../../models/EarnedMoreAuthorsDTO";

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

  getActiveUsers(): Observable<HttpResponse<any>> {
    return this.http.get<any>(endPoint + '/active-users', {observe: 'response', headers: this.headers})
  }
  getFamousBooks(): Observable<HttpResponse<any>> {
    return this.http.get<any>(endPoint + '/famous-books', {observe: 'response', headers: this.headers})
  }

  getActiveAuthors():Observable<HttpResponse<IActiveAuthors[]>> {
    return this.http.get<IActiveAuthors[]>(endPoint + '/active-authors', {observe: 'response', headers: this.headers})
  }

  getEarnedAuthor():Observable<HttpResponse<IEarnedAuthors[]>> {
    return this.http.get<IEarnedAuthors[]>(endPoint + '/earned-authors', {observe: 'response', headers: this.headers})
  }
}
