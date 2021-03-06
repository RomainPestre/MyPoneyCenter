import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { formatDate } from '@angular/common';
import { sha256 } from 'js-sha256';
import { UserComponent } from '../user/user.component';
import { HorseComponent } from '../horse/horse.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  connectedUser: BehaviorSubject<UserComponent> = new BehaviorSubject<UserComponent>(null);
  isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isSession: BehaviorSubject<string> = new BehaviorSubject<string>('');
  isId: BehaviorSubject<number> = new BehaviorSubject<number>(null);
  isInstructor: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isAdmin: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isSuper: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  privilegesRider = 0;
  privilegesInstructor = 1;
  privilegesAdmin = 2;
  privilegesSuperUser = 4;

  courseRegistrationId: BehaviorSubject<number> = new BehaviorSubject<number>(null);
  horseRegistrationId: BehaviorSubject<number> = new BehaviorSubject<number>(null);


  securePassword(rawPwd, saltVar1) {
    var securePwd = "";
    securePwd = sha256(rawPwd.concat(saltVar1, "MyPoneyCenter"));
    return securePwd;
  }

  generateSessionToken() {
    var token = "";
    var variables = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++) {
      token += variables.charAt(Math.floor(Math.random() * variables.length));
    }
    console.log(token);

    return token;
  }

  dateNow() {
    var today = new Date();
    var now = "";
    now = formatDate(today, 'dd/MM/yyyy HH:mm:ss', 'en-US');

    console.log(now);
  }
}
