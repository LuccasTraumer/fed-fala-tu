import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth: boolean = false;

  constructor() {
    this.auth = !!sessionStorage.getItem('auth');
    console.warn(this.auth)
  }

  isAuth(): boolean {
    return this.auth;
  }
}
