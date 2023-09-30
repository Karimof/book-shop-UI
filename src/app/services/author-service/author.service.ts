import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {IAuthor} from "../../models/Author-model";

const endPoint = 'http://localhost:9094/api/v2/author'

@Injectable({
  providedIn: 'root'
})

export class AuthorService {

  headers = new HttpHeaders({
    'Authorization': 'Bearer ' + window.localStorage.getItem("token"),
  })

  constructor(public http: HttpClient) {
  }

  getAuthor(id: number): Observable<HttpResponse<IAuthor>> {
    return this.http.get(endPoint + '/' + id, {observe: 'response', headers: this.headers})
  }
}
