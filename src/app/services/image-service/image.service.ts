import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {IBookDTO} from "../../models/BooksDTO-model";
import {DomSanitizer} from "@angular/platform-browser";

const endPoint = 'http://localhost:9094/api/v1/books'

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  headers = new HttpHeaders({
    'Authorization': 'Bearer ' + window.localStorage.getItem("token"),
  })

  constructor(public http: HttpClient, private sanitizer: DomSanitizer) {
  }

  getImage(imageName: string): Observable<any> {
    return this.http.get(endPoint + '/image/' + imageName, {
      observe: 'response',
      headers: this.headers,
      responseType: "blob"
    })
  }

  getImageByBook(book: IBookDTO): IBookDTO {
    this.getImage(book.image!).subscribe(image => {
      let blob = new Blob([image['body']], {type: 'image/png'});
      let objectURL = URL.createObjectURL(blob);
      book.image = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    });
    return book;
  }
}
