import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';// for routing
import { HttpClient } from '@angular/common/http'; // for http request
import {CookieService} from 'angular2-cookie/core'; // for cookies for tokens
import { Globals } from '../globals';
@Component({
  selector: 'app-hr-login',
  templateUrl: './hr-login.component.html',
  styleUrls: ['./hr-login.component.scss']
})
export class HrLoginComponent implements OnInit {
  readonly pageName = 'account/login/admin';
  emppassword : string;
  empId : string;

  constructor(private router: Router, private httpClient: HttpClient, private g: Globals) {
    document.body.style.background = 'rgba(4,89,152,0.5)';
  }

  goToPage(pageName:string){

    this.httpClient.post(this.g.url+this.pageName,
      {
        username: this.empId,
        password:this.emppassword,
        role : "ROLE_ADMIN"
      })
      .subscribe(
        data => {
          // console.log("POST Request is successful ", data);
          // this.router.navigate([`${pageName}`]);

          var t:String = JSON.stringify(data)
          var token:String = t.substring(10,t.length-2);
          localStorage.setItem('#token$',token+"");
          
          if(data){
            this.router.navigateByUrl("/analysis");
          }

        },
        error => {
          console.log("Error has occured", error);
        }
      );
  }


  ngOnInit() {
  }

}
