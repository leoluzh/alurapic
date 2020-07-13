import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [ HeaderComponent ],
    exports: [ HeaderComponent ],
    imports: [ 
        CommonModule ,
        RouterModule ]
})
export class CoreModule { }