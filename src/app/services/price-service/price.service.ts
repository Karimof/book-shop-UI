import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {IComments} from "../../models/Comments-model";

const endPoint = 'http://localhost:9094/api/v1/price'

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  headers = new HttpHeaders({
    'Authorization': 'Bearer ' + window.localStorage.getItem("token"),
  })

  constructor(public http: HttpClient) {
  }
  //todo -------
  getAllPrices(): Observable<HttpResponse<IComments>> {
    return this.http.get(endPoint, {observe: 'response', headers: this.headers})
  }
}
