import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {IAuthor} from "../../models/Author-model";

const endPoint = 'http://localhost:9094/api/v1/author'

@Injectable({
  providedIn: 'root'
})

export class AuthorService {

  constructor(public http: HttpClient) {
  }

  getAuthor(id: number): Observable<HttpResponse<IAuthor>> {
    return this.http.get(endPoint + '/' + id, {observe: 'response'})
  }
}
