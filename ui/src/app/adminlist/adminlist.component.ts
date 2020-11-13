import { Component, OnInit } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { NgserviceService } from '../ngservice.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-adminlist',
  templateUrl: './adminlist.component.html',
  styleUrls: ['./adminlist.component.css']
})
export class AdminlistComponent implements OnInit {
  _adminlist: UserComponent[];
  isAdmin: boolean;

  constructor(private _service: NgserviceService, private _route: Router, private authService: AuthService) {
    this.authService.isAdmin.subscribe(value => {
      this.isAdmin = value;
    });
  }

  ngOnInit(): void {
    this._service.fetchUserListByPrivileges(this.authService.privilegesAdmin).subscribe(
      data => {
        console.log("Admin list successfully fetched");
        this._adminlist = data;
      },
      error => console.log("Error : exception occured")
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
        console.log("Exception occured");
        this._route.navigate(['/adminpanel']);
      }
    )
  }
}
