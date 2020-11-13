import { Component, OnInit } from '@angular/core';
import { NgserviceService } from '../ngservice.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isUserLoggedIn: boolean;
  isInstructor: boolean;
  isAdmin: boolean;
  isSuper: boolean;

  constructor(private _service: NgserviceService, private authService: AuthService) {
    this.authService.isUserLoggedIn.subscribe(value => {
      this.isUserLoggedIn = value;
    });
    this.authService.isInstructor.subscribe(value => {
      this.isInstructor = value;
    });
    this.authService.isAdmin.subscribe(value => {
      this.isAdmin = value;
    });
    this.authService.isSuper.subscribe(value => {
      this.isSuper = value;
    });
  }

  ngOnInit(): void {
  }
}
