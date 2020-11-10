import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { formatDate } from '@angular/common';
import { sha256 } from 'js-sha256';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isSession: BehaviorSubject<string> = new BehaviorSubject<string>('');
  isId: BehaviorSubject<number> = new BehaviorSubject<number>(null);
  isInstructor: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isAdmin: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isSuper: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


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
