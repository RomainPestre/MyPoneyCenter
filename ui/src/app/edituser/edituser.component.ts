import { Component, OnInit } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { Router, ActivatedRoute } from '@angular/router';
import { NgserviceService } from '../ngservice.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  user = new UserComponent;
  isId: number;

  constructor(private _route: Router, private _service: NgserviceService, private _activatedRoute: ActivatedRoute, private authService: AuthService) {
    this.authService.isId.subscribe(value => {
      this.isId = value;
    });
  }

  ngOnInit(): void {
    this._service.fetchUserByIdFromRemote(this.isId).subscribe(
      data => {
        this.user = data;
        console.log("User fetched")
      },
      error => console.log("Error : cannot fetch user")
    )
  }

  updateUserformsubmit() {
    this.user.password = this.authService.securePassword(this.user.password, this.user.email);
    this._service.addUserToRemote(this.user).subscribe(
      data => {
        console.log("User added succesfully");
        this._route.navigate(['home']);
      },
      error => console.log("Error : cannot update user")
    )
  }

  goToHome() {
    this._route.navigate(['home']);
    console.log("Retour à la page d'accueil");
  }
}
