import {Component} from '@angular/core';
import {AuthorService} from "../../services/author-service/author.service";
import {Router} from "@angular/router";
import {IAuthor} from "../../models/Author-model";
import {IBookDTO} from "../../models/BooksDTO-model";
import {ImageService} from "../../services/image-service/image.service";
import {v4 as uuidv4} from 'uuid';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {

  books?: IBookDTO[]
  author?: IAuthor;
  formData?:FormData

  file: any
  url = ''

  constructor(private authorService: AuthorService, protected router: Router, private imageService: ImageService) {
  }

  ngOnInit() {
    this.authorService.getAuthorBooks().subscribe(res => {
      if (res.body != null) {
        this.books = res.body!
        for (let book of this.books!) {
          book = this.authorService.getImageByBook(book)
        }
      }
    }, error => {
      if (error.status == '403'){
        this.router.navigate(['/error']).then()
      }
    })
  }

  onSubmit(bookVM: {
    name: string,
    price: number
  }) {
    this.authorService.createBook(bookVM).subscribe(value => {
      if (value.body != null) {
        // this.authorService.saveImage(this.formData!).subscribe()
      }
    })
    this.ngOnInit()
  }

  onSelectFile(e: any) {
    if (e.target.files) {
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0])
      // this shows picture after choice
      reader.onload = (event: any) => {
        this.url = event.target.result

        this.file = new File([e.target.files[0]], uuidv4() + '.jpg', {type: "image/jpeg"})
        this.formData!.append('file', this.file);

      }
    }
  }
}
