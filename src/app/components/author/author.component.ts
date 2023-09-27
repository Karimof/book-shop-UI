import {Component} from '@angular/core';
import {AuthorService} from "../../services/author-service/author.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {

  constructor(private authorService: AuthorService, protected router: Router) {
  }

  ngOnInit() {
    this.authorService.getAuthor(1).subscribe(res => {
      if (res.body != null) {
        console.log(res.body)
      }
    })
  }
}
