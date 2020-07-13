import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { User } from './user';
import { TokenService } from './../token/token.service';
import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode' ;

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private userSuject = new BehaviorSubject<User>(null);
    private username: string = '';

    constructor( private tokenService: TokenService ) {
        if ( this.tokenService.hasToken() ) {
            this.decodeAndNotity();
        }
    }

    setToken( token: string ): void {
        this.tokenService.setToken(token);
        this.decodeAndNotity();
    }

    getUser(): Observable<User> {
        return this.userSuject.asObservable();
    }

    private decode(): User {
        const token = this.tokenService.getToken();
        const user = jwt_decode(token) as User;
        this.username = user.name;
        return user;
    }

    private notity( user: User): void {
        this.userSuject.next( user );
    }

    private decodeAndNotity(): void {
        this.notity( this.decode() );
    }

    logout(): void {
        this.tokenService.removeToken();
        this.userSuject.next(null);
    }

    isLogged(): boolean {
        return this.tokenService.hasToken();
    }

    getUsername(){

    }


}