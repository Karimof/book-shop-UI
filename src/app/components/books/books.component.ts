import {Component} from '@angular/core';
import {BooksService} from "../../services/books-service/books.service";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  constructor(protected booksService: BooksService) {
  }

  ngOnInit(){
    this.booksService.getAllBooks().subscribe( res => {
      if (res.body != null){
        console.log(res.body)
        console.log(window.localStorage.getItem("token"))
      }
    })
  }
}
