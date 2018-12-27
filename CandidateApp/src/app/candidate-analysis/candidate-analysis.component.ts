import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // for http request
import { Globals } from '../globals';
import { findLast } from '@angular/compiler/src/directive_resolver';

@Component({
  selector: 'app-candidate-analysis',
  templateUrl: './candidate-analysis.component.html',
  styleUrls: ['./candidate-analysis.component.scss']
})
export class CandidateAnalysisComponent implements OnInit {
  question: string;
  questionList: Array<any>;

  readonly addQPage = 'questions';

  constructor(private httpClient: HttpClient, private g: Globals) {
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

  addQuestion() {
    if (this.find() == 0) {
      this.questionList.push({
        questionNo: 'Q' + (this.questionList.length + 1),
        questionName: this.question
      });
      this.httpClient
        .post(this.g.url + this.addQPage, {
          questionNo: this.questionList.length,
          questionName: this.question
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
            questionNo: 'Q' + (i + 1),
            questionName: data[i].questionName
          });
        }
      },
      error => {
        console.log('Error', error);
      }
    );
  }
}
