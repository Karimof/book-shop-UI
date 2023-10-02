import {Component} from '@angular/core';
import {UserService} from "./services/user-service/user.service";
import {Router} from "@angular/router";
import {JwtHelperService} from '@auth0/angular-jwt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'book-shop-UI';
  token?: string = ''
  hidden: boolean = false
  role?: string | null

  constructor(protected userService: UserService, private router: Router) {
  }

  ngOnInit() {
    if (window.localStorage.getItem("token") != '') {
      this.token = window.localStorage.getItem("token")!
      this.hidden = true;
      this.role = new JwtHelperService()?.decodeToken(this.token).role;
    } else {
      this.role = null;
    }
  }

  logout() {
    window.localStorage.setItem("token", '')
    this.userService.logout().subscribe(value => {
      this.token = ''
      this.hidden = false
      window.localStorage.setItem("token", '')
      this.ngOnInit()
    })
  }
}
