import { Component, Input } from '@angular/core';
import { ChartModule } from 'angular2-chartjs';

@Component({
  selector: 'chart-component',
  templateUrl: './chart.component.html'
})
export class ChartComponent{

    @Input() private chartOptions;
    @Input() private chartData;
    @Input() private chartLabels;

    onChartClick(event) {
        console.log(event);
    }

}
