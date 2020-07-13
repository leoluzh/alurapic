import { debounceTime, switchMap, map, first } from 'rxjs/operators';
import { AbstractControl } from '@angular/forms';
import { SignUpService } from './signup.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserNotTakenValidatorService {

    constructor( private signUpService: SignUpService ) {

    }


    checkUsernameTaken() {
        return ( control: AbstractControl ) => {
            return control
            .valueChanges
            .pipe(debounceTime(300))
            .pipe(switchMap(userName =>
                this.signUpService.checkUsernameTaken(userName)
            ))
            .pipe(map(isTaken => isTaken ? { userNameTaken: true } : null))
            .pipe(first());
        };
    }

}