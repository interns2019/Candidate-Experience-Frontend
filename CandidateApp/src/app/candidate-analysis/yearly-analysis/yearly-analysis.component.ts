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
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
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

