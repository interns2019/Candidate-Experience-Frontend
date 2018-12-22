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
  feedback: string;
  readonly URL =  'http://192.168.43.54:8080/';
  readonly pageName = 'feedback'

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

  submitFeedback()
  {
      this.httpClient.post(this.URL+this.pageName,
      {
        refId: 'A11345',
        candidateName: 'Anurag Ghosh',
        candidateCompanyName: 'Jp Morgan',
        feedback:this.feedback
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

  ngOnInit()
  {
    
  }

}
