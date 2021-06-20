import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        let accessToken = localStorage.getItem("accessToken");

        let modifiedRequest = req;

        if(accessToken != null){
            // console.log(accessToken + " <=========")
            modifiedRequest = req.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + accessToken
                }
            })
        }

        return next.handle(modifiedRequest)
    }
    
}