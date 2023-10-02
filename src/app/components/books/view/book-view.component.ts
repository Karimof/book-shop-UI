import {Component} from '@angular/core';
import {IBookDTO} from "../../../models/BooksDTO-model";
import {BooksService} from "../../../services/books-service/books.service";
import {ImageService} from "../../../services/image-service/image.service";
import {DomSanitizer} from "@angular/platform-browser";
import {ActivatedRoute,} from "@angular/router";
import {UserPurchasesService} from "../../../services/user-purchases-service/user-purchases.service";
import {IComments} from "../../../models/Comments-model";
import {CommentsService} from "../../../services/comments-servise/comments.service";

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent {

  booksDTO?: IBookDTO
  comments?: IComments[]
  hiddenAlert: boolean

  constructor(
    protected purchasesService: UserPurchasesService,
    protected commentsService: CommentsService,
    protected booksService: BooksService,
    protected imageService: ImageService,
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute
  ) {
    this.hiddenAlert = true
  }

  ngOnInit(withoutRefresh: boolean) {
    let id = this.getPathVariable()
    this.booksService.getBook(id).subscribe(res => {
      if (res.body !== null) {
        this.booksDTO = res.body!
        if (!withoutRefresh){
          this.booksService.increaseViewCount(id).subscribe()
        }
        this.booksDTO = this.imageService.getImageByBook(this.booksDTO)
        this.getAllComments()
      }
    })
  }

  getPathVariable(): number {
    return Number(this.route.snapshot.paramMap.get("id"));
  }

  buy(bookId: number) {
    this.purchasesService.buyBooks(bookId).subscribe()
    this.hiddenAlert = false
  }

  closeAlert() {
    this.hiddenAlert = true;
  }

  getAllComments() {
    this.commentsService.getAllBookComments(this.booksDTO?.id!).subscribe(res => {
      if (res.body != null) {
        this.comments = res.body
      }
    })
  }

  sendComment(data: { content: string }) {
    let commentVM = {bookId: this.booksDTO!.id, content: data.content}
    this.commentsService.sendComment(commentVM).subscribe()
    let elementById = document.getElementById('content');
    elementById!.innerText = ''
    this.getAllComments()
    this.ngOnInit(true)
  }
}
