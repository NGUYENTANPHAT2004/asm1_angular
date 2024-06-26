import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../interface/user';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URL = 'http://localhost:3000'
  constructor(private http:HttpClient,private router: Router) { }
  RegisterUser = (data:User):Observable<any>=>{
    return this.http.post(this.API_URL+'/register', data)
  }
  UserLogin = (data:User):Observable<any>=>{
    return this.http.post(this.API_URL+'/login',data)
  }
  CheckUserValid = ():boolean=>{
    const token:string = localStorage.getItem('user') as string
    let check = false
    try {
        if (token!==null){
          const decoded:any = jwtDecode(token);
          if (decoded?.exp > Date.now()/1000){
            check=true
          }
        }
    } catch (error) {

    }
    return check
  }
  logout(): void {
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }
}
