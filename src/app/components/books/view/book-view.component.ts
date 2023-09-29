import {Component} from '@angular/core';
import {IBookDTO} from "../../../models/BooksDTO-model";
import {BooksService} from "../../../services/books-service/books.service";
import {ImageService} from "../../../services/image-service/image.service";
import {DomSanitizer} from "@angular/platform-browser";
import {ActivatedRoute,} from "@angular/router";
import {IBook} from "../../../models/Books-model";

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent {

  booksDTO?: IBookDTO

  constructor(protected booksService: BooksService,
              protected imageService: ImageService,
              private sanitizer: DomSanitizer,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    let id = this.getPathVariable()
    console.log(id)
    this.booksService.getBook(id).subscribe(res => {
      if (res.body !== null) {
        this.booksDTO = res.body!
        console.log(this.booksDTO)
        this.booksDTO = this.imageService.getImageByBook(this.booksDTO)
      }
    })

  }


  getPathVariable(): number {
    return Number(this.route.snapshot.paramMap.get("id"));
  }

  buy(bookDTO: IBookDTO) {
    const book: IBook = bookDTO
  }
}
