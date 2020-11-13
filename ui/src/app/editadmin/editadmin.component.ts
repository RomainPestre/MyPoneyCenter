import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgserviceService } from '../ngservice.service';
import { UserComponent } from '../user/user.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-editadmin',
  templateUrl: './editadmin.component.html',
  styleUrls: ['./editadmin.component.css']
})
export class EditadminComponent implements OnInit {
  user = new UserComponent;
  pwdfield: string;

  isAdmin: boolean;

  constructor(private _route: Router, private _service: NgserviceService, private _activatedRoute: ActivatedRoute, private authService: AuthService) {
    this.authService.isAdmin.subscribe(value => {
      this.isAdmin = value;
    });
  }

  ngOnInit(): void {
    let id = parseInt(this._activatedRoute.snapshot.paramMap.get('id'));
    this._service.fetchUserByIdFromRemote(id).subscribe(
      data => {
        console.log("User recieved")
        this.user = data;
      },
      error => console.log("Error : Cannot fetch user by id")
    )
  }

  updateUserformsubmit() {
    if (this.pwdfield != null) {
      this.user.password = this.authService.securePassword(this.pwdfield, this.user.email);
    }

    this._service.updateUser(this.user).subscribe(
      data => {
        console.log("User added succesfully");
        this._route.navigate(['home']);
      },
      error => console.log("Error : cannot update user")
    )
  }

  goBack() {
    this._route.navigate(['adminlist']);
  }
}
