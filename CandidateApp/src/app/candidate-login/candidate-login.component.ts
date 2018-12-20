import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-candidate-login',
  templateUrl: './candidate-login.component.html',
  styleUrls: ['./candidate-login.component.scss']
})
export class CandidateLoginComponent implements OnInit {

  constructor(private router: Router) {document.body.style.background = 'rgba(4,89,152,0.25)'; }
  
  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }
  

  ngOnInit() {
  }

}
