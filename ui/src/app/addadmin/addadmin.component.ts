import { Component, OnInit } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { Router } from '@angular/router';
import { NgserviceService } from '../ngservice.service';
import { sha256 } from 'js-sha256';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-addadmin',
  templateUrl: './addadmin.component.html',
  styleUrls: ['./addadmin.component.css']
})
export class AddadminComponent implements OnInit {
  user = new UserComponent;
  isSuper: boolean;

  constructor(private _route: Router, private _service: NgserviceService, private authService: AuthService) {
    this.authService.isSuper.subscribe(value => {
      this.isSuper = value;
    });
  }

  ngOnInit(): void {
  }

  addUserformsubmit() {
    this.user.password = sha256(this.user.password.concat(this.user.email, "MyPoneyCenter"));
    this._service.addUserToRemote(this.user).subscribe(
      data => {
        console.log("User succesfully created");
        this._route.navigate(['userlist']);
      },
      error => console.log("Error")
    )
  }

  gotolist() {
    console.log("Go back");
    this._route.navigate(['adminlist']);
  }
}
