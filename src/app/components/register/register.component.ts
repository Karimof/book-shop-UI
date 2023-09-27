import {Component} from '@angular/core';
import {UserService} from "../../services/user-service/user.service";
import {IUsers, Users} from "../../models/User-model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user?: IUsers = new Users()

  constructor(private userService: UserService, protected router: Router) {
  }

  onSubmit(data: {
    name: string,
    login: string,
    password: string
  }) {
    console.log(data.name)
    this.user!.name = data.name
    this.user!.login = data.login
    this.user!.password = data.password
    this.userService.register(this.user!).subscribe(res => {
      if (res.body != null) {
        this.router.navigate(['/books']).then()
      }
    })
  }
}
