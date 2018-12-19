import { Component } from '@angular/core';
import {CookieService} from 'angular2-cookie/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title : string;
  question: Array<number>;
  value: Array<string>;
  cookieService: CookieService;

  constructor(){
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
}
