import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminGuard implements CanActivate {
  
  constructor(private router:Router,private authService:AuthService){

  }
  canActivate():boolean{
    if(this.authService.loggedInAdmin()){
      return true;
    }else{
      this.router.navigateByUrl("/hrlogin");
      return false;
    }
   }

}
