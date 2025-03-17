import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router,private  auth :AuthService) { }
  canActivate(
    next : ActivatedRouteSnapshot,
    state: RouterStateSnapshot, ) {

      
    if (this.auth.isLoggedIn()) {
      return true ;
    } else {
      // this.router.navigate(["/login"])
      // return false;
      return true;
    }
  }
}