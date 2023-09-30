import {Component} from '@angular/core';
import {UserService} from "../../services/user-service/user.service";
import {Router} from "@angular/router";
import {IRegisterRequest, RegisterRequest} from "../../models/Register-request";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerRequest?: IRegisterRequest = new RegisterRequest()
  selected?: string = 'USER'

  constructor(private userService: UserService, protected router: Router) {
  }

  onSubmit(data: {
    role: string,
    name: string,
    login: string,
    password: string
  }) {
    this.registerRequest!.role = data.role
    this.registerRequest!.name = data.name
    this.registerRequest!.login = data.login
    this.registerRequest!.password = data.password
    this.userService.register(this.registerRequest!).subscribe(res => {
      if (res.body != null) {
        this.router.navigate(['/']).then()
      }
    })
  }
}
