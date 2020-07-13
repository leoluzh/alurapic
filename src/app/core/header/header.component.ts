import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './../user/user.service';
import { Component } from '@angular/core';
import { User } from '../user/user';

@Component({
    selector: 'app-header' ,
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    user$: Observable<User>;
    //user: User;

    constructor( 
        private userService: UserService , 
        private router: Router ) {
        console.log('Constructor de HeaderComponent ...');
        this.user$ = userService.getUser();
       // this.user$.subscribe( user => { 
       //     console.log(`user.name = ${user.name}`);
       //     this.user = user; });
    }

    logout(){
        this.userService.logout();
        this.router.navigate(['']);
    }

}