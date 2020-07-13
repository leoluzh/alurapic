import { SignUpComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';
import { VMessageModule } from './../shared/vmessage/vmessage.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms' ;

import { SignInComponent } from './signin/signin.component';


@NgModule({
    declarations: [ SignInComponent , SignUpComponent ] ,
    exports: [ SignInComponent , SignUpComponent ] ,
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        VMessageModule ]
})
export class HomeModule { }