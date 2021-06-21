import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private _router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let accessToken = localStorage.getItem("accessToken");

        let modifiedRequest = req;

        if (accessToken != null) {
            console.log(req.url)
            if (req.url === "http://localhost:8000/login") {
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