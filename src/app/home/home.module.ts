import { SignUpService } from './signup/signup.service';
import { HomeRoutingModule } from './home.routing.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms' ;

import { VMessageModule } from './../shared/vmessage/vmessage.module';
import { SignUpComponent } from './signup/signup.component';
import { SignInComponent } from './signin/signin.component';
import { HomeComponent } from './home.component';


@NgModule({
    declarations: [ SignInComponent , SignUpComponent , HomeComponent ] ,
    exports: [ SignInComponent , SignUpComponent , HomeComponent ] ,
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        VMessageModule ,
        HomeRoutingModule ] ,
    providers: [ SignUpService ]
})
export class HomeModule { }