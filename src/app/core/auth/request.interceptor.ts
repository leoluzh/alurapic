import { TokenService } from './../token/token.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

const TOKEN_HEADER = 'x-access-token';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

    constructor( private tokenService: TokenService ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if( this.tokenService.hasToken() ){
            const token = this.tokenService.getToken();
            request = request.clone({
                setHeaders: {
                    TOKEN_HEADER: token
                }
            });
        }
        
        return next.handle( request );
    }

}