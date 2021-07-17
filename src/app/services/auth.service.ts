import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = 'https://localhost:5001/v1/';
  jwtHelper = new JwtHelperService();
  decodeToken: any;

  constructor(private http: HttpClient) { }

  login(model: any){
    return this.http.get(`${this.baseUrl}login?username=${model.username}&password=${model.password}`).pipe(
      map((response: any) => {
        const user = response;
        if(user){
          localStorage.setItem('token', user.token);
          localStorage.setItem('role', user.role);
          this.decodeToken = this.jwtHelper.decodeToken(user.token);
        }
      })
    )
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    window.location.reload();
  }

  verifyRole(){
    return localStorage.getItem('role') ?? undefined;
  }

  logedIn(){
    const token = localStorage.getItem('token') ?? undefined;
    return !this.jwtHelper.isTokenExpired(token);
  }

}
