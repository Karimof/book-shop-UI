import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {IBook} from "../../models/Books-model";
import {IBookDTO} from "../../models/BooksDTO-model";
import {DomSanitizer} from "@angular/platform-browser";

const endPoint = 'http://localhost:9094/api/v2/author'

@Injectable({
  providedIn: 'root'
})

export class AuthorService {

  headers = new HttpHeaders({
    'Authorization': 'Bearer ' + window.localStorage.getItem("token")
  })

  constructor(public http: HttpClient, private sanitizer: DomSanitizer) {
  }

  getAuthorBooks(): Observable<HttpResponse<IBook[]>> {
    return this.http.get<IBook[]>(endPoint + '/book', {observe: 'response', headers: this.headers})
  }

  getImage(imageName: string): Observable<any> {
    return this.http.get(endPoint + '/books-image/' + imageName, {
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

  createBook(bookVM: any): Observable<HttpResponse<IBook>> {
    return this.http.post(endPoint + '/create-book', bookVM, {
      observe: 'response',
      headers: this.headers
    })
  }

  saveImage(file: FormData) {
    return this.http.post(endPoint + '/save-book-image',  file, {
      observe: 'response',
      headers: this.headers.append("Content-Type", "multipart/form-data")})
  }
}
