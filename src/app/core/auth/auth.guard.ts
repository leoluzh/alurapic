import { Observable } from 'rxjs';
import { UserService } from './../user/user.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor( 
        private userService: UserService ,
        private router: Router ){

    }

    canActivate( route: ActivatedRouteSnapshot , state: RouterStateSnapshot ): boolean | Observable<boolean> | Promise<boolean> {
        if( this.userService.isLogged() ){
            // se estiver logado nao pode ir para tela de login!!
            this.router.navigate( [ 'user' , this.userService.getUsername() ] );
            return false;
        }
        return true;
    }

}