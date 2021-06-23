import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt'

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private _router: Router, private jwtHelper: JwtHelperService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let accessToken = localStorage.getItem("accessToken");

        let modifiedRequest = req;


        if (accessToken != null && !(this.jwtHelper.isTokenExpired(accessToken))) {
            console.log(this.jwtHelper.isTokenExpired(accessToken))
            if (req.url.includes('/login')) {
                return next.handle(modifiedRequest);
            }
            modifiedRequest = req.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + accessToken
                }
            })
        } else {
            this._router.navigate(['login'])
        }

        return next.handle(modifiedRequest)
    }

}
