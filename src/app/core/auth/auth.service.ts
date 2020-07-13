import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators' ;

import { UserService } from './../user/user.service';


const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private userService: UserService ) { }

  authenticate( username: string , password: string ): Observable<any> {
    // cuidado - parametros sao case sensitives...
    return this.http
      .post( `${API_URL}/user/login` , 
        { userName: username , password: password } ,
        // ativar funcionalidade para acessar headers ...
        { observe : 'response' }
      ).pipe( tap( response  =>  {
          const authToken = response.headers.get('x-access-token');
          // window.localStorage.setItem('authToken', authToken);
          this.userService.setToken(authToken);
          console.log(authToken);
      }));
  }

}
