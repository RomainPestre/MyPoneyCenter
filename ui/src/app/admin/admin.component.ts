import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgserviceService } from '../ngservice.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  isAdmin: boolean;
  isSuper: boolean;

  constructor(private _route: Router, private _service: NgserviceService, private _activatedRoute: ActivatedRoute, private authService: AuthService) {
    this.authService.isAdmin.subscribe(value => {
      this.isAdmin = value;
    });
    this.authService.isSuper.subscribe(value => {
      this.isSuper = value;
    });
  }

  ngOnInit(): void {
  }

  goToUserList() {
    this._route.navigate(['userlist']);
    console.log("Go to user list");
  }

  goToInstructorList() {
    this._route.navigate(['instructorlist']);
    console.log("Go to instructor list");
  }

  goToAdminList() {
    this._route.navigate(['adminlist']);
    console.log("Go to admin list");
  }

  goToHorseList() {
    this._route.navigate(['horselist']);
    console.log("Go to horse list");
  }
}
