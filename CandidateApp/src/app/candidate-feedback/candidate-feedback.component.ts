import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { CookieService } from 'angular2-cookie/core'; // for cookies
import { HttpClient } from '@angular/common/http'; // for http request
=======
import {CookieService} from 'angular2-cookie/core'; // for cookies
import { HttpClient } from '@angular/common/http'; // for http request 
import { Globals } from '../globals';
import { DatePipe } from '@angular/common';
>>>>>>> 694fadcf3df96c416979da706692c69f86de567c

@Component({
  selector: 'app-candidate-feedback',
  templateUrl: './candidate-feedback.component.html',
  styleUrls: ['./candidate-feedback.component.scss']
})
<<<<<<< HEAD
export class CandidateFeedbackComponent implements OnInit {
  title: string;
  question: Array<number>;
  value: Array<string>;
=======



export class CandidateFeedbackComponent implements OnInit{

  title : string;
>>>>>>> 694fadcf3df96c416979da706692c69f86de567c
  cookieService: CookieService;
  questionList: Array<any>;
  feedback: string;
<<<<<<< HEAD
  readonly URL = 'http://localhost:8080/';
  readonly pageName = 'feedback';

  constructor(private httpClient: HttpClient) {
    this.title = 'TIAA CANDIDATE FEEDBACK';
    this.question = new Array(8).fill(null);
    this.value = new Array(8).fill('?');
    this.cookieService = new CookieService();
  }

  setScore(a, b) {
    this.question[a] = b;
    if (b < 8) {
      this.value[a] = 'Average';
    } else if (b < 10) {
      this.value[a] = 'Satisfactory';
    } else {
      this.value[a] = 'Excellent';
=======
  readonly pageName = 'feedback';
  myDate = new Date();

  constructor(private httpClient : HttpClient, private g: Globals, private datePipe: DatePipe){
    document.body.style.background = 'rgba(4,89,152,0.25)';
    this.title = 'TIAA CANDIDATE FEEDBACK';
    this.cookieService = new CookieService();  
    this.questionList = new Array();
  }
  
  setScore(a,b) {
    this.questionList[a].questionRating = b;
    if(b<8)
    {
      this.questionList[a].questionOverAll = 'Average'
    }
    else if(b<10)
    {
      this.questionList[a].questionOverAll = 'Satisfactory'
    }
    else{
      this.questionList[a].questionOverAll = 'Excellent'
>>>>>>> 694fadcf3df96c416979da706692c69f86de567c
    }
  }

  setCookie() {
    this.cookieService.put('test', 'testingCookie');
  }

<<<<<<< HEAD
  submitFeedback() {
    this.httpClient
      .post(this.URL + this.pageName, {
        refId: 'A11388',
        candidateName: 'Anurag',
        candidateCompanyName: 'qwe',
        feedback: this.feedback
      })
      .subscribe(
        data => {
          console.log('POST Request is successful ', data);
        },
        error => {
          console.log('Error', error);
        }
      );
=======
  submitFeedback()
  {
      console.log(this.datePipe.transform(this.myDate, 'yyyy-MM-dd'))
      this.httpClient.post(this.g.url+this.pageName,
      {
        dateString: this.datePipe.transform(this.myDate, 'yyyy-MM-dd'),
        // candidateCompanyName: 'Jp Morgan',
        feedback:this.feedback,
        questionList: this.questionList
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
    this.httpClient.get(this.g.url+this.g.getQuestions).subscribe(data => {
        for(let i =0; i< 4;i++)
        {
          this.questionList.push({questionNo: 'Q'+(i+1), questionName: data[i].questionName, questionOverAll:'?', questionRating: null})
        }
      },
      error => {
          console.log("Error", error);
      }
    );
>>>>>>> 694fadcf3df96c416979da706692c69f86de567c
  }

  ngOnInit() {}
}
