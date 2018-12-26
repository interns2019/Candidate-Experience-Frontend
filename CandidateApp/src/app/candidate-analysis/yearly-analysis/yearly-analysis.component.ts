import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
@Component({
  selector: 'app-yearly-analysis',
  templateUrl: './yearly-analysis.component.html',
  styleUrls: ['./yearly-analysis.component.scss']
})
export class YearlyAnalysisComponent implements OnInit {
  BarChart=[];
  constructor() {
    document.body.style.background = 'rgba(4,89,152,0.25)';
  }

  ngOnInit() {
    this.BarChart=new Chart ('barchart', {
      type: 'bar',
      data: {
        labels: ["2018", "2019", "2020", "2021"], //yeh dynamically [2018 to current_year] lena padega:
                                              // assuming ki hamara feed backack system 2018 se data collect karna start kiya
        datasets: [{
          label: '# of Votes',
          data: [10, 2, 7, 5],
          backgroundColor: [
            'rgba(255, 99, 132, 0.45)',
            'rgba(54, 162, 235, 0.45)',
            'rgba(255, 206, 86, 0.45)',
            'rgba(75, 192, 192, 0.45)',
            'rgba(153, 102, 255, 0.45)',
            'rgba(255, 159, 64, 0.45)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
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

}

