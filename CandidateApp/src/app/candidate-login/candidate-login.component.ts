import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'; // for http request 
@Component({
  selector: 'app-candidate-login',
  templateUrl: './candidate-login.component.html',
  styleUrls: ['./candidate-login.component.scss']
})
export class CandidateLoginComponent implements OnInit {

  readonly URL =  'http://localhost:4000/';
  constructor(private router: Router, private http: HttpClient) { document.body.style.background = 'rgba(4,89,152,0.25)';}


  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }
  

  ngOnInit() {
    
  }
  // code for ge requests
  // this.http.get(this.URL).subscribe(data => {
  //   console.log(data[0]);
  // }
  // );
}
