import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewUser } from './new-user';

const API_URL: string = 'http://localhost:3000' ;

@Injectable({
    providedIn: 'root'
})
export class SignUpService {

    constructor( private http: HttpClient ){}

    checkUsernameTaken( username: string ): Observable<any> {
        return this.http.get(`${API_URL}/user/exists/${username}`);
    }

    signup( newUser: NewUser ){
        const json = JSON.stringify( newUser );
        console.log(`Registrando novo usuario: ${json}`);
        return this.http.post(`${API_URL}/user/signup`, { newUser } );
    }

}