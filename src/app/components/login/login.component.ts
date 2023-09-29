import {Component} from '@angular/core';
import {IUsers, Users} from "../../models/User-model";
import {UserService} from "../../services/user-service/user.service";
import {Router} from "@angular/router";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user?: IUsers = new Users()

  constructor(private userService: UserService, protected router: Router, private appComponent: AppComponent) {
  }

  onSubmit(data: {
    login: string,
    password: string
  }) {
    this.user!.login = data.login
    this.user!.password = data.password
    this.userService.login(this.user!).subscribe(res => {
      if (res.body?.token != null) {
        window.localStorage.setItem("token", res.body.token!)
        this.appComponent.ngOnInit()
        this.router.navigate(['']).then()
      }
    })
  }
}
