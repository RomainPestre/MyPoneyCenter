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
  isSuper: boolean;

  constructor(private _service: NgserviceService, private _route: Router, private authService: AuthService) {
    this.authService.isSuper.subscribe(value => {
      this.isSuper = value;
    });
  }

  ngOnInit(): void {
    /*
    this._service.fetchAdminListFromRemote().subscribe(
      data => {
        console.log("Admin list successfully fetched");
        this._adminlist = data;
      },
      error => console.log("Error : exception occured")
    )
    */
    this._service.fetchUserListByPrivileges(this.authService.privilegesAdmin).subscribe(
      data => {
        console.log("Admin list successfully fetched");
        this._adminlist = data;
      },
      error => console.log("Error : exception occured")
    )
  }

  goToAddAdmin() {
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
        this._route.navigate(['/home']);
      },
      error => console.log("Exception occured")
    )
  }

}
