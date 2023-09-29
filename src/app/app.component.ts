import {Component} from '@angular/core';
import {UserService} from "./services/user-service/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'book-shop-UI';
  token?: string = ''
  hidden: boolean = false

  constructor(protected userService: UserService, private router: Router) {
  }

  ngOnInit() {
    if (window.localStorage.getItem("token") != '') {
      this.token = window.localStorage.getItem("token")!
      this.hidden = true;
    }
    console.log(this.hidden)
  }

  logout() {
    window.localStorage.setItem("token", '')
    this.userService.logout().subscribe(value => {
      this.token = ''
      this.hidden = false
      window.localStorage.setItem("token", '')
      this.router.navigate(['/']).then()
    })
  }
}
