import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
@Component({
  selector: 'app-monthly-analysis',
  templateUrl: './monthly-analysis.component.html',
  styleUrls: ['./monthly-analysis.component.scss']
})
export class MonthlyAnalysisComponent implements OnInit {
  BarChart=[];
  constructor() {
    document.body.style.background = 'rgba(4,89,152,0.25)';
  }

  ngOnInit() {
    this.BarChart=new Chart ('barchart', {
      type: 'bar',
      data: {
        labels: ["Jan", "Feb", "March", "April", "May", "June","July","Aug","Sept","Oct","Nov","Dec"],
        datasets: [{
          label: '# of Votes',
          data: [1, 5, 3, 5, 2, 3,7, 9, 3, 5, 10, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.45)',
            'rgba(54, 162, 235, 0.45)',
            'rgba(255, 206, 86, 0.45)',
            'rgba(75, 192, 192, 0.45)',
            'rgba(153, 102, 255, 0.45)',
            'rgba(255, 159, 64, 0.45)',
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
            'rgba(255, 159, 64, 1)',
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
