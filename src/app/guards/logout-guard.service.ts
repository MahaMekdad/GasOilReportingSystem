import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { JwtAuthenticationService } from '../services/jwt-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class LogoutGuardService implements CanActivate {

  constructor(private router:Router,private authenticationService:JwtAuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
      if(!this.authenticationService.isUserLoggedIn()){
        return true;
      }

      return false;
  }
}
