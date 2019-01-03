import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';// for routing
import { HttpClient } from '@angular/common/http'; // for http request 
import {CookieService} from 'angular2-cookie/core'; // for cookies for tokens
import { Globals } from '../globals';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions,Response} from '@angular/http';
import 'rxjs/add/operator/map';

import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-candidate-login',
  templateUrl: './candidate-login.component.html',
  styleUrls: ['./candidate-login.component.scss']
})


export class CandidateLoginComponent implements OnInit {

  readonly pageName = 'account/login';
  password : string;
  username : string;
  
  constructor(private router: Router, private http: Http, private g: Globals, private cookie: CookieService, private httpClient: HttpClient) {
     document.body.style.background = 'rgba(4,89,152,0.25)';
  }

  goToPage(pageName:string){
    console.log(this.username);
    console.log(this.password);

    this.httpClient.post(this.g.url+this.pageName,{
    username:this.username,
    password:this.password,
    role: "ROLE_USER"
  })
    .subscribe(data => {
      //console.log(data);
      //console.log(JSON.stringify(data));
      var t:String = JSON.stringify(data)
      var token:String = t.substring(10,t.length-2);
      localStorage.setItem('token',token+"");
      if(data){
        this.router.navigateByUrl("/feedback");
      }
     
     })
  }
  
  ngOnInit() {
    
  }
  // code for get requests
  // this.http.get(this.URL).subscribe(data => {
  //   console.log(data[0]);
  // }
  // );
}
