import { Component, OnInit } from '@angular/core';
import { NgserviceService } from '../ngservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _service: NgserviceService, private _route: Router) { }

  ngOnInit(): void {
  }

  goToAddUser() {
    this._route.navigate(['/adduser']);
  }
}
