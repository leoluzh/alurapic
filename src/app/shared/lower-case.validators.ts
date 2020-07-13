import { AbstractControl } from '@angular/forms';

export function lowerCaseValidator( control: AbstractControl ) {

    console.log(`Calling lowercase...`);

    if( control.value.trim() && !/^[a-z0-9_\-]+$/.test(control.value) ) {
        console.log(`Calling lowercase validator with value: ${control.value}`);
        return { lowerCase: true };
    }
    return null;
}