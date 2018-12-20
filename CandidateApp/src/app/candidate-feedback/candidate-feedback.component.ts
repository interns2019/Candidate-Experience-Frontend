import { Component, OnInit } from '@angular/core';
import {CookieService} from 'angular2-cookie/core'; // for cookies
import { HttpClient } from '@angular/common/http'; // for http request 

@Component({
  selector: 'app-candidate-feedback',
  templateUrl: './candidate-feedback.component.html',
  styleUrls: ['./candidate-feedback.component.scss']
})
export class CandidateFeedbackComponent implements OnInit{

  title : string;
  question: Array<number>;
  value: Array<string>;
  cookieService: CookieService;
  comment: string;
  readonly URL =  'http://localhost:4000/';

  constructor(private httpClient : HttpClient){
    this.title = 'TIAA CANDIDATE FEEDBACK';
    this.question = new Array(8).fill(null);
    this.value = new Array(8).fill('?');
    this.cookieService = new CookieService();  
  }
  
  setScore(a,b) {
    this.question[a] = b;
    if(b<8)
    {
      this.value[a] = 'Average'
    }
    else if(b<10)
    {
      this.value[a] = 'Satisfactory'
    }
    else{
      this.value[a] = 'Excellent'
    }
  }

  setCookie()
  {
    this.cookieService.put('test','testingCookie');
  }

  ngOnInit()
  {
    this.httpClient.post(this.URL,
    {
      data: this.question
    })
    .subscribe(
        data => {
            console.log("POST Request is successful ", data);
        },
        error => {
            console.log("Error", error);
        }
    ); 
  }

}
