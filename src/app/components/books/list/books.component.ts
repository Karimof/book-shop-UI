import {Component} from '@angular/core';
import {BooksService} from "../../../services/books-service/books.service";
import {ImageService} from "../../../services/image-service/image.service";
import {IBookDTO} from "../../../models/BooksDTO-model";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  booksDTO?: IBookDTO[]

  constructor(protected booksService: BooksService,
              protected imageService: ImageService) {
  }

  ngOnInit() {
    this.booksService.getAllBooks().subscribe(res => {
      if (res.body != null) {
        this.booksDTO = res.body
        for (let book of this.booksDTO!) {
          book = this.imageService.getImageByBook(book)
        }
      }
    })
    // this.booksService.getAllBooks().subscribe(res => {
    //   if (res.body != null) {
    //     this.books = res.body
    //     for (const book of this.books) {
    //       if (book.image != null) {
    //         this.imageService.getImage(book.image).subscribe(image => {
    //           let blob = new Blob([image['body']], {type: 'image/png'});
    //           let objectURL = URL.createObjectURL(blob);
    //           this.image = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    //         });
    //       }
    //     }
    //   }
    // })
  }

  getAndPutImage(): void {
    for (let book of this.booksDTO!) {
      book = this.imageService.getImageByBook(book)
      console.log(book)
    }
  }


}
