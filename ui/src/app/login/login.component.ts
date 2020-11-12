import { Component, OnInit } from '@angular/core';
import { NgserviceService } from '../ngservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { AuthService } from '../services/auth.service';
import { sha256 } from 'js-sha256';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new UserComponent;
  isUserLoggedIn: boolean;
  isSession: string;
  isAdmin: boolean;
  isSuper: boolean;

  constructor(private _route: Router, private _service: NgserviceService, private _activatedRoute: ActivatedRoute, private authService: AuthService) {
    this.authService.isUserLoggedIn.subscribe(value => {
      this.isUserLoggedIn = value;
    });
    this.authService.isSession.subscribe(value => {
      this.isSession = value;
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

  loginformsubmit() {
    //Conversion du mot de passe en SHA-256 + sallage
    this.user.password = this.authService.securePassword(this.user.password, this.user.email);
    this._service.fetchUserByEmailAndPasswordFromRemote(this.user.email, this.user.password).subscribe(
      //Si "email" AND "password" sont corrects
      data => {
        console.log("Correct login information");
        this.user = data;
        console.log("Fetch user");

        //Création d'un token de session
        this.user.session = this.authService.generateSessionToken();
        console.log("Session token generated successfully");

        /*
        console.log("====================");
        console.log("email : " + this.user.email);
        console.log("expiration : " + this.user.expiration);
        console.log("firstname : " + this.user.firstname);
        console.log("id : " + this.user.id);
        console.log("license : " + this.user.license);
        console.log("name : " + this.user.name);
        console.log("password : " + this.user.password);
        console.log("phone : " + this.user.phone);
        console.log("privileges : " + this.user.privileges);
        console.log("session : " + this.user.session);
        console.log("====================");
        */

        //Enregistrer ce token en bdd
        //Au vu des fonctionnalités du site, je ne m'attarde pas plus sur un token de session
        /*
        this._service.addUserToRemote(this.user).subscribe(
          data => {
            console.log("Session tokken added successfully");
          },
          error => console.log("Error : Session tokken can't be added")
        )*/

        //On stocke le token de session dans un sessionStorage
        //sessionStorage.setItem('sessionToken', this.user.session);

        //On stocke le jeton de session dans une variable
        this.authService.isSession.next(this.user.session);

        this.authService.isId.next(this.user.id);
        this.detectPrivileges(this.user.privileges);
        
        //On signale à l'application qu'on est connecté, ce qui refresh la navbar
        this.authService.isUserLoggedIn.next(true);
        this.authService.connectedUser.next(this.user);

        //Redirection vers la page associée
        switch (this.user.privileges) {
          case 0: //cavalier
            this.goToHome();
            break;
          case 1: //moniteur
            this.goToHome();
            break;
          case 2: //administrateur
            this.goToHome();
            break;
          case 3: //auncun utilisateur pour le moment
            break;
          case 4: //super utilisateur
            this.goToHome();
            this._route.navigate(['adminlist']);            
            break;
          default:
            this.goToHome();
        }
      },
      //Si "email" OR "password" est incorrects
      error => console.log("Error : wrong email or password")
    )
  }

  disconnect() {
    this.authService.isUserLoggedIn.next(false);
    console.log("Logged out");
    this.goToHome();
  }

  goToHome() {
    this._route.navigate(['home']);
    console.log("Back to home page");
  }

  detectPrivileges(privileges) {
    switch (privileges) {
      case 0:
        this.authService.isAdmin.next(false);
        this.authService.isSuper.next(false);
        this.authService.isInstructor.next(false);
        break;
      case 1:
        this.authService.isAdmin.next(false);
        this.authService.isSuper.next(false);
        this.authService.isInstructor.next(true);
        break;
      case 2:
        this.authService.isAdmin.next(true);
        this.authService.isSuper.next(false);
        this.authService.isInstructor.next(true);
        break;
      case 4:
        this.authService.isAdmin.next(true);
        this.authService.isSuper.next(true);
        this.authService.isInstructor.next(true);
        break;
    }
  }
}
