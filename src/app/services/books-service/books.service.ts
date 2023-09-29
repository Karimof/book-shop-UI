import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {IBook} from "../../models/Books-model";

const endPoint = 'http://localhost:9094/api/v1/books-price'

@Injectable({
  providedIn: 'root'
})

export class BooksService {

  headers = new HttpHeaders({
    'Authorization': 'Bearer ' + window.localStorage.getItem("token"),
  })

  constructor(public http: HttpClient) {
  }

  getAllBooks(): Observable<HttpResponse<IBook[]>> {
    return this.http.get<IBook[]>(endPoint, {observe: 'response', headers: this.headers})
  }

  getBook(id: number): Observable<HttpResponse<IBook>> {
    return this.http.get<IBook>(endPoint + "/" + id, {observe: 'response', headers: this.headers})
  }
}
