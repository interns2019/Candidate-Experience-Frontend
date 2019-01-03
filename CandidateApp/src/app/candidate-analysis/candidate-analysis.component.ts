import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // for http request
import { Globals } from '../globals';
import { findLast } from '@angular/compiler/src/directive_resolver';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-candidate-analysis',
  templateUrl: './candidate-analysis.component.html',
  styleUrls: ['./candidate-analysis.component.scss']
})
export class CandidateAnalysisComponent implements OnInit {
  question: string;
  questionList: Array<any>;
  editQuestion: number;
  selectedQ: string;

  readonly addQPage = 'questions';
  readonly updateQPage='questions';

  constructor(private httpClient: HttpClient, private g: Globals, private authService:AuthService) {
    this.questionList = new Array();
    document.body.style.background = 'rgba(4,89,152,0.25)';
  }

  find() {
    for (let i = 0; i < this.questionList.length; i++) {
      if (this.questionList[i].questionName === this.question) {
        return -1;
      }
    }
    return 0;
  }


selectQuestion(index){
    console.log(this.questionList[index]._id)
    this.selectedQ = this.questionList[index].questionName
    this.editQuestion = index
}





setVisiblity(i)
{
   this.editQuestion = i 
   if(this.questionList[i].visible)
   {
    this.questionList[i].visible = false
   }
   else{
    this.questionList[i].visible = true
   }
   this.updateQuestion()
}


updateQuestion()
{
  if(this.editQuestion != null)
  {
    var i = this.editQuestion
    this.httpClient.put(this.g.url+'questions',{
    id : this.questionList[i].id, 
    questionName: this.question,
    questionNo: i+1,
    visible: this.questionList[i].visible
  }).subscribe(
    data => {
      console.log('POST Request is successful ', data);
      this.questionList[i].questionName = this.question
    },
    error => {
      console.log('Error', error);
    }
  );
 }
 else{
   alert("No question selected!")
 }
}



  addQuestion() {
    if (this.find() == 0) {
      this.questionList.push({
        questionNo: 'Q' + (this.questionList.length + 1),
        questionName: this.question,
        
      });
      this.httpClient
        .post(this.g.url + this.addQPage, {
          questionNo: this.questionList.length,
          questionName: this.question,
          visible: true
        })
        .subscribe(
          data => {
            console.log('POST Request is successful ', data);
          },
          error => {
            console.log('Error', error);
          }
        );
    } else {
      alert('This question already exists!');
    }
  }

  ngOnInit() {
    this.httpClient.get(this.g.url + this.g.getQuestions).subscribe(
      data => {
        console.log(data);

        for (let i = 0; i < data["length"]; i++) {
          this.questionList.push({
            id: data[i].id,
            questionNo: 'Q' + (i + 1),
            questionName: data[i].questionName,
            visible: data[i].visible
          });
        }
      },
      error => {
        console.log('Error', error);
      }
    );
  }

  logout(){
  this.authService.logoutAdmin();
  
  }
}
