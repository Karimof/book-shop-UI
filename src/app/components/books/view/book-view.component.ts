import {Component} from '@angular/core';
import {IBookDTO} from "../../../models/BooksDTO-model";
import {BooksService} from "../../../services/books-service/books.service";
import {ImageService} from "../../../services/image-service/image.service";
import {DomSanitizer} from "@angular/platform-browser";
import {ActivatedRoute,} from "@angular/router";
import {IBook} from "../../../models/Books-model";
import {UserPurchasesService} from "../../../services/user-purchases-service/user-purchases.service";

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent {

  booksDTO?: IBookDTO
  book?: IBook
  hiddenAlert: boolean

  constructor(protected booksService: BooksService,
              protected imageService: ImageService,
              protected userPurchasesService: UserPurchasesService,
              private sanitizer: DomSanitizer,
              private route: ActivatedRoute) {
    this.hiddenAlert = true
  }

  ngOnInit() {
    let id = this.getPathVariable()
    this.booksService.getBook(id).subscribe(res => {
      if (res.body !== null) {
        this.booksDTO = res.body!
        this.booksService.increaseViewCount(id).subscribe()
        this.booksDTO = this.imageService.getImageByBook(this.booksDTO)
      }
    })
  }

  getPathVariable(): number {
    return Number(this.route.snapshot.paramMap.get("id"));
  }

  buy(bookId: number) {
    this.userPurchasesService.buyBooks(bookId).subscribe()
    this.hiddenAlert = false
  }

  closeAlert() {
    this.hiddenAlert = true;
  }
}
