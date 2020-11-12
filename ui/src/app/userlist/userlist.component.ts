import { Component, OnInit } from '@angular/core';
import { NgserviceService } from '../ngservice.service';
import { Router } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  _userlist: UserComponent[];
  isAdmin: boolean;

  constructor(private _service: NgserviceService, private _route: Router, private authService: AuthService) {
    this.authService.isAdmin.subscribe(value => {
      this.isAdmin = value;
    });
  }

  ngOnInit(): void {
    this._service.fetchUserListByPrivileges(0).subscribe(
      data => {
        console.log("Users fetched");
        this._userlist = data;
      },
      error=>console.log("Error : cannot fetch users")
    )
  }

  goToAddUser() {
    this._route.navigate(['/adduser']);
  }

  goToEditProduct(id: number) {
    console.log("Edit producti id : " + id);
    this._route.navigate(['/editproduct/', id]);
  }

  goToViewProduct(id: number) {
    console.log("View producti id : " + id);
    this._route.navigate(['/viewuser', id]);
  }

  deleteProduct(id: number) {
    this._service.deleteProductByIdFromRemote(id).subscribe(
      data => {
        console.debug("Deleted succesfully");
        this._route.navigate(['/productlist']);
      },
      error => console.log("Exception occured")
    )
  }

}
