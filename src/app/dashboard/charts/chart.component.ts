import { Component, OnInit, Input } from '@angular/core';
import { ChartModule } from 'angular2-chartjs';

@Component({
  selector: 'chart-component',
  templateUrl: './chart.component.html'
})
export class ChartComponent implements OnInit {

    @Input() public chartOptions;
    @Input() public chartData;
    @Input() public chartLabels;

    ngOnInit():void {

        //   this.chartOptions = {
        //     responsive: true
        //   };

        //   this.chartData = [
        //     { data: [330, 600, 260, 700], label: 'Information' },
        //     { data: [120, 455, 100, 340], label: 'Low'},
        //     { data: [45, 67, 800, 500], label: 'Medium' },
        //     { data: [20, 255, 140, 640], label: 'High'},
        //     { data: [4, 167, 345, 720], label: 'Critical' }
        //   ];

        //   this.chartLabels = ['January', 'February', 'Mars', 'April'];

    }

      onChartClick(event) {
        console.log(event);
      }

}
