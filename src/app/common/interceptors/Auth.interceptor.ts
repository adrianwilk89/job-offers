import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

        const authReq = request.clone({ setHeaders: { 'x-api-key': 'zEiAS4E5pE3mFnaqIKn3s6kCxsgqHCKH9VB97I0f' } });

        return next.handle(authReq);
    }
    
}