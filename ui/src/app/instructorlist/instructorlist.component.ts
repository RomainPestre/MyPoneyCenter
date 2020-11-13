import { Component, OnInit } from '@angular/core';
import { NgserviceService } from '../ngservice.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-instructorlist',
  templateUrl: './instructorlist.component.html',
  styleUrls: ['./instructorlist.component.css']
})
export class InstructorlistComponent implements OnInit {
  _userlist: UserComponent[];
  isAdmin: boolean;

  constructor(private _service: NgserviceService, private _route: Router, private authService: AuthService) {
    this.authService.isAdmin.subscribe(value => {
      this.isAdmin = value;
    });
  }

  ngOnInit(): void {
    this._service.fetchUserListByPrivileges(1).subscribe(
      data => {
        console.log("Instructors fetched");
        this._userlist = data;
      },
      error => console.log("Error : cannot fetch instructors")
    )
  }

  addAdmin() {
    this._route.navigate(['/addadmin']);
  }

  editAdmin(id: number) {
    console.log("Edit user id : " + id);
    this._route.navigate(['/editadmin/', id]);
  }

  deleteAdmin(id: number) {
    console.log("delete id : " + id);
    this._service.deleteUserByIdFromRemote(id).subscribe(
      data => {
        console.debug("Deleted succesfully");
        this._route.navigate(['/adminpanel']);
      },
      error => {
        this._route.navigate(['/adminpanel']);
      }
    )
  }
}
