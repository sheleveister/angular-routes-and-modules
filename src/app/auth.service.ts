import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  public isLoggedIn: boolean = false;

  public isAuth() {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(this.isLoggedIn);
      }, 1000);
    });
  }

  public logIn() {
    this.isLoggedIn = true;
  }

  public logOut() {
    this.isLoggedIn = false;
  }

}
