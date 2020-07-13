import { Router } from '@angular/router';
import { SignUpService } from './signup.service';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { lowerCaseValidator } from './../../shared/lower-case.validators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NewUser } from './new-user';

@Component({
    selector: 'ap-signup' ,
    templateUrl: './signup.component.html'
})
export class SignUpComponent implements OnInit {

    signupForm: FormGroup;

    constructor( 
        private formBuilder: FormBuilder,
        private userNotTakenValidatorService: UserNotTakenValidatorService,
        private signUpService: SignUpService,
        private router: Router ) {}

    ngOnInit(){

        this.signupForm = this.formBuilder.group({
            email: ['',
                [
                    Validators.required,
                    Validators.email
                ]
            ],
            fullName: ['',
                [
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(40)
                ]
            ],
            userName: ['',
            // validadores sincronos...
                [
                    Validators.required,
                    lowerCaseValidator,
                    Validators.minLength(2),
                    Validators.maxLength(30)
                ] ,
            // validadores asincronos...
                [
                    this.userNotTakenValidatorService.checkUsernameTaken()
                ]
            ],
            password: ['',
                [
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(14)
                ]
            ]
        });
    }

    signup(){
        console.log('Chamou funcao signup');
        // fazendo cast de raw values para uma interface.
        const newUser: NewUser = this.signupForm.getRawValue() as NewUser;
        this.signUpService.signup( newUser )
        .subscribe( 
            () => this.router.navigate(['']) ,
            ( error ) => console.log(`Erro no signup. mgs: ${error}`) );
    }

}