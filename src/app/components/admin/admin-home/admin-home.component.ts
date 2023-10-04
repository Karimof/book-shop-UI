import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AdminHomeService} from "../../../services/admin-home/admin-home.service";
import {IUsers} from "../../../models/User-model";
import {IFamousBooks} from "../../../models/Famous-Books-model";
import {IActiveAuthors} from "../../../models/ActiveAuthorsDTO";
import {IEarnedAuthors} from "../../../models/EarnedMoreAuthorsDTO";

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {

  weekUsers?: IUsers[]
  monthUsersCount?: any
  activeUsers?: any

  famousBooks?: IFamousBooks[]

  activeAuthors?: IActiveAuthors[]
  earnedAuthors?: IEarnedAuthors[]

  constructor(protected router: Router, private adminService: AdminHomeService) {
  }

  ngOnInit() {
    this.adminService.getLastWeekUsers().subscribe(res => {
      if (res.body != null) {
        this.weekUsers = res.body
      }
    })

    this.adminService.getAllUsersShowByMonth().subscribe(res => {
      if (res.body != null) {
        this.monthUsersCount = res.body
      }
    })

    this.adminService.getActiveUsers().subscribe(res => {
      if (res.body != null) {
        this.activeUsers = res.body
      }
    })

    this.adminService.getFamousBooks().subscribe(res => {
      if (res.body != null) {
        this.famousBooks = res.body
      }
    })

    this.adminService.getActiveAuthors().subscribe(res => {
      if (res.body != null) {
        this.activeAuthors = res.body
      }
    })

    this.adminService.getEarnedAuthor().subscribe(res => {
      if (res.body != null) {
        this.earnedAuthors = res.body
      }
    })
  }
}
