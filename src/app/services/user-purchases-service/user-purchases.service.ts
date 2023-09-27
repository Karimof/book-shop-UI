import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUserPurchases} from "../../models/UserPurchases-model";

const endPoint = 'http://localhost:9094/api/v1/userPurchases'

@Injectable({
  providedIn: 'root'
})
export class UserPurchasesService {


  headers = new HttpHeaders({
    'Authorization': 'Bearer ' + window.localStorage.getItem("token"),
  })

  constructor(public http: HttpClient) {
  }
  //todo -------
  getAllPrices(): Observable<HttpResponse<IUserPurchases>> {
    return this.http.get(endPoint, {observe: 'response', headers: this.headers})
  }
}
