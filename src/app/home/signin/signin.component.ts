import { PlatformDetectorService } from './../../core/platform/platform-detector.service';
import { AuthService } from './../../core/auth/auth.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit { 

    loginForm: FormGroup;

    // buscar elemento da tela para component ... #usernameInput
    @ViewChild('usernameInput') usernameInput: ElementRef<HTMLInputElement>;


    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService ,
        private router: Router ,
        private platformDetectorService: PlatformDetectorService){

    }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required] ,
            password: ['', Validators.required] ,
        });
        if ( this.platformDetectorService.isPlatformBrowser() ) {
            this.usernameInput.nativeElement.focus();
        }
    }

    login(): void {

        console.log('Chamou função de login!!!');

        const username = this.loginForm.get('username').value;
        const password = this.loginForm.get('password').value;

        this.authService.authenticate( username , password ).subscribe(
            (value) => {
                console.log('Autenticou!');
                this.router.navigate(['user', username]);
            },
            (error) => { 
                console.log('Não foi possível autenticar. Username/password inválido!');
                this.loginForm.reset();
                // previnir codigo que manipula dom ... em outras plataforma.
                if ( this.platformDetectorService.isPlatformBrowser() ) {
                    this.usernameInput.nativeElement.focus();
                }
            });

    }

}