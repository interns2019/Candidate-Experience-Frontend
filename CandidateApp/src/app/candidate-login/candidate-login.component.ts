import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';// for routing
import { HttpClient } from '@angular/common/http'; // for http request 
import {CookieService} from 'angular2-cookie/core'; // for cookies for tokens
import { Globals } from '../globals';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions,Response} from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-candidate-login',
  templateUrl: './candidate-login.component.html',
  styleUrls: ['./candidate-login.component.scss']
})


export class CandidateLoginComponent implements OnInit {

  readonly pageName = 'login';
  password : string;
  refId : string;
  
  constructor(private router: Router, private http: Http, private g: Globals, private cookie: CookieService) {
     document.body.style.background = 'rgba(4,89,152,0.25)';
  }

  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
    let headers = new Headers();
    headers.append('Accept', 'application/json')
    // creating base64 encoded String from user name and password
    var base64Credential: string = btoa( this.refId + ':' +this.password);
    headers.append("Authorization", "Basic " + base64Credential);

    
    let options = new RequestOptions();
    options.headers=headers;

    // this.http.get(this.g.url+"/account/login" ,   options)
    //   .map((response: Response) => {
    //   // login successful if there's a jwt token in the response
    //   let user = response.json().principal;// the returned user object is a principal object
    //   if (user) {
    //     // store user details  in local storage to keep user logged in between page refreshes
    //     this.cookie.put('currentUser', JSON.stringify(user));
    //   }
    //   else{
    //   }
    // });
  }
  
  ngOnInit() {
    
  }
  // code for get requests
  // this.http.get(this.URL).subscribe(data => {
  //   console.log(data[0]);
  // }
  // );
}
