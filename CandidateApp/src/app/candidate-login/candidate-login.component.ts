import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';// for routing
import { HttpClient } from '@angular/common/http'; // for http request 
import {CookieService} from 'angular2-cookie/core'; // for cookies



@Component({
  selector: 'app-candidate-login',
  templateUrl: './candidate-login.component.html',
  styleUrls: ['./candidate-login.component.scss']
})


export class CandidateLoginComponent implements OnInit {

  readonly URL =  'http://localhost:4000/';
  readonly pageName = 'login';
  refId : string;
  password : string;
  
  constructor(private router: Router, private httpClient: HttpClient) {
     document.body.style.background = 'rgba(4,89,152,0.25)';
  }

  goToPage(pageName:string){
    
    this.httpClient.post(this.URL+this.pageName,
      {
        refId: this.refId,
        password:this.password
      })
      .subscribe(
          data => {
              console.log("POST Request is successful ", data);
              this.router.navigate([`${pageName}`]);
          },
          error => {
              console.log("Error has occured", error);
          }
      ); 
  }
  
  ngOnInit() {
    
  }
  // code for get requests
  // this.http.get(this.URL).subscribe(data => {
  //   console.log(data[0]);
  // }
  // );
}
