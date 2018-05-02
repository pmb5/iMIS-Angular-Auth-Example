import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { AppConstantService } from './app-constants.service';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {
    private webApiBaseUrl: string;
    private authToken: string;

    constructor(appConstants: AppConstantService) {
        this.webApiBaseUrl = appConstants.baseUrl;
        this.authToken = appConstants.authToken;        
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Add our XSRF token and prefix our URL with the right server
        request = request.clone({
            setHeaders: {
                RequestVerificationToken: this.authToken,
            }, 
            url: Location.joinWithSlash(this.webApiBaseUrl, (request.url || '')) 
        });
        return next.handle(request);
    }
}