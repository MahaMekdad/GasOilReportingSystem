import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtAuthenticationService {
  constructor(private http:HttpClient) { }


  
  getAuthenticatedUser() {
    return localStorage.getItem("authenticatedUser");
  }

  getAuthenticatedToken() {
    if(this.getAuthenticatedUser())
      return localStorage.getItem("accessToken");
  }

  isUserLoggedIn() {
    let user = localStorage.getItem("authenticatedUser");
    return !(user === null)
  }

  loggout(){
    localStorage.removeItem("authenticatedUser");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userRole");
    localStorage.removeItem("jobLocation");
    localStorage.removeItem("name");
  }

  checkAuthorizationPrivilege(){
    let role = localStorage.getItem("userRole");
    if(+role !== 1 && +role !== 4){
      return true;
    } else {
      return false;
    }
  }

  isAdmin(){
    return +localStorage.getItem("userRole") === 4
  }
}
