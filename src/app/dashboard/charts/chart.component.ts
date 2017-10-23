import { Component } from '@angular/core';
import { ChartModule } from 'angular2-chartjs';

@Component({
  selector: 'chart-component',
  templateUrl: './chart.component.html'
})
export class ChartComponent {

    type = 'line';
      data = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "My dataset",
            data: [65, 59, 80, 81, 56, 55, 40]
          }
        ]
      };
      options = {
        responsive: true,
        maintainAspectRatio: false
      };

}
