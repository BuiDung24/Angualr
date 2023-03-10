import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin: boolean = true;

constructor() { }

login(){
  this.isLogin = true;
}
logout() {
  this.isLogin = false;
}

isAuthenticated () {
  const promise = new Promise<boolean> ((resovle, reject) => {
    setTimeout(() => resovle(this.isLogin), 800);
  });
  return promise;
}

}
