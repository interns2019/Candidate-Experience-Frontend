import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient, private router:Router) { }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  loggedInAdmin(){
    return !!localStorage.getItem('#token$');
  }

  getToken():String{
    const token:String = localStorage.getItem('token');
    const tokenAdmin:String = localStorage.getItem('#token$');
    if(token){
        return token;
    }else if(tokenAdmin){
        return tokenAdmin;
    }
  }

  getTokenAdmin(){
    return localStorage.getItem('#token$');
  }


  logoutUser(){
    localStorage.removeItem('token');
    this.router.navigateByUrl("/login")
  }

  logoutAdmin(){
    localStorage.removeItem('#token$');
    this.router.navigateByUrl("/hrlogin")
  }




}
