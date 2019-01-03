import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { HttpClient } from '@angular/common/http'; // for http request 
import { Globals } from '../../globals';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-monthly-analysis',
  templateUrl: './monthly-analysis.component.html',
  styleUrls: ['./monthly-analysis.component.scss']
})
export class MonthlyAnalysisComponent implements OnInit {
  BarChart; 
  analysis;
  fromYear: string = "overAll";
  yearList: Array<any>;

  questionList: Array<any>;

  constructor(private httpClient : HttpClient, private g : Globals,private authService:AuthService) {
    this.questionList = new Array();
    this.yearList = new Array();
    document.body.style.background = 'rgba(4,89,152,0.25)';
  }

  setFromYear(year)
  {
     this.fromYear = year;
     this.reinitializeGraph()
      if(this.fromYear === 'overall')
      {
        var path = 'analysis/monthly'
      }
      else{
        var path = 'analysis/monthly?year='+this.fromYear
      }

      this.httpClient.get(this.g.url+path).subscribe(data => {
        this.analysis = data
      },
      error => {
          console.log("Error", error);
      }
      );
  }

  drawGraph(questionNo)
  {
    this.reinitializeGraph()
    for(let i =1 ;i <= 12; i++)
      {
            this.BarChart.data.datasets[0].data.push(this.analysis[i][''+questionNo])
            var r1 = Math.round(Math.random()*255) 
            var r2 = Math.round(Math.random()*255)
            var r3 = Math.round(Math.random()*255)
            this.BarChart.data.datasets[0].backgroundColor.push('rgba('+r1+', '+r2+', '+r3+', 0.45)')
            this.BarChart.data.datasets[0].borderColor.push('rgba('+r1+', '+r2+', '+r3+', 1)')
      }
      this.BarChart.update()
  }

  reinitializeGraph()
  {
    this.BarChart.data.datasets[0].data = []
    this.BarChart.data.datasets[0].backgroundColor = []
    this.BarChart.data.datasets[0].borderColor = []
  }

  initializeGraph()
  {
    this.BarChart=new Chart ('barchart', {
      type: 'bar',
      data: {
        labels: ["Jan", "Feb", "March", "April", "May", "June","July","Aug","Sept","Oct","Nov","Dec"],
        datasets: [{
          label: '# of Votes',
          data: [],
          backgroundColor: [],
          borderColor: [],
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true
            }
          }]
        }
      }
    });
  }

  ngOnInit() {
          this.initializeGraph()
          this.httpClient.get(this.g.url+this.g.getQuestions).subscribe(data => {
            for(let i =0; i< data['length'];i++)
            {
              this.questionList.push({questionNo: (i+1), questionName: data[i].questionName})
            }
          },
          error => {
              console.log("Error", error);
          }
        );
        
        

        this.httpClient.get(this.g.url+'analysis/yearly').subscribe(data => {
          var  year = 2019    //Date.getFullYear()
          while(data[''+year]!==undefined)
          {
            this.yearList.push(''+year)
            year -=1
          }
          this.yearList.push('overAll')
        },
        error => {
            console.log("Error", error);
        }
        );
    }  
    logout(){
      this.authService.logoutAdmin();
     }
}
