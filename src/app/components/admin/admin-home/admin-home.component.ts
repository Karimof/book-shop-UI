import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AdminHomeService} from "../../../services/admin-home/admin-home.service";
import {IUsers} from "../../../models/User-model";

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {

  weekUsers?: IUsers[]
  monthUsersCount?: any
  activeUsers?: any

  constructor(protected router: Router, private adminService: AdminHomeService) {
  }

  ngOnInit(){
    this.adminService.getLastWeekUsers().subscribe(res => {
      if (res.body!= null){
        this.weekUsers = res.body
        console.log(this.weekUsers)
      }
    })

    this.adminService.getAllUsersShowByMonth().subscribe(res => {
      if (res.body!= null){
        this.monthUsersCount = res.body
        console.log(this.monthUsersCount)
      }
    })

    this.adminService.getActiveUsers().subscribe(res => {
      if (res.body!= null){
        this.activeUsers = res.body
        console.log(this.activeUsers)
      }
    })
  }
}
