import { Component, OnInit } from '@angular/core';
import { NgserviceService } from '../ngservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new UserComponent;

  constructor(private _route: Router, private _service: NgserviceService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  loginformsubmit() {
    ///TODO: SHA256 password
    this._service.fetchUserByEmailAndPasswordFromRemote(this.user.email, this.user.password).subscribe(
      //Si "email" AND "password" sont corrects
      data => {
        console.log("Identifiants corrects");
        this.user = data;
        this.goToHome();
      },
      //Si "email" OR "password" est incorrects
      error => console.log("error")
    )
  }

  /*loginformsubmit() {
    ///TODO: SHA256 password
    this._service.fetchUserByEmailFromRemote(this.user.email).subscribe(
      //Si l'utilisateur existe
      data => {
        console.log("Récupération de l'utilisateur via son email réussie.");
        //console.log(this.user.firstname + " " + this.user.name);
        //Si le mot de passe est correct
        if (this.user.password == data.password) {
          console.log("Identifiants corrects");
          this.user = data;
          this.goToHome();
        }
        //Si le mot de passe est incorrect
        else {
          console.log("Identifiants incorrects");
        }
      },
      //Si l'utilisateur n'existe pas
      error => console.log("error")
    )
  }*/

  goToHome() {
    this._route.navigate(['']);
  }
}
