import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private sotrageService :StorageService,
    private cookieService :CookieService 
  ) { }

  // Simulate login
  login(username: string, password: string): boolean {
    // if (username === 'admin' && password === 'password') {
    //   this.isAuthenticated = true;
    //   this.sotrageService.setItem('auth', 'true');  // Store authentication state
    //   return true;
    // }
    // return false;

    // after retreicing token from response 
    this.cookieService.set('token','pla pla pla')
    return true ; 
  }

  // Simulate logout
  logout(): void {
    this.cookieService.delete('token');
  }

  isLoggedIn():Boolean{

     return this.getToken() ? true : false ;
  }

  getToken(): string | null {
    return this.cookieService.get('token');
  }
}
