import { Component, OnInit } from '@angular/core';
import { NgserviceService } from '../ngservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { AuthService } from '../services/auth.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { sha256 } from 'js-sha256';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new UserComponent;
  isUserLoggedIn: boolean;

  constructor(private _route: Router, private _service: NgserviceService, private _activatedRoute: ActivatedRoute, private authService: AuthService) {
    this.authService.isUserLoggedIn.subscribe(value => {
      this.isUserLoggedIn = value;
    });
  }

  ngOnInit(): void {
  }

  loginformsubmit() {
    //Conversion du mot de passe en SHA-256
    this.user.password = sha256(this.user.password);
    this._service.fetchUserByEmailAndPasswordFromRemote(this.user.email, this.user.password).subscribe(
      //Si "email" AND "password" sont corrects
      data => {
        console.log("Identifiants corrects");
        this.user = data;
        //On signale à l'application qu'on est connecté, ce qui refresh la navbar
        this.authService.isUserLoggedIn.next(true);
        //On retourne à l'accueil
        this.goToHome();
      },
      //Si "email" OR "password" est incorrects
      error => console.log("error")
    )
  }

  disconnect() {
    this.authService.isUserLoggedIn.next(false);
    console.log("Déconnecté");
    this.goToHome();
  }

  goToHome() {
    this._route.navigate(['home']);
    console.log("Retour à la page d'accueil");
  }
}
