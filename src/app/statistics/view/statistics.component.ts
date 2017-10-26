import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '../service/statistics-service';
import { ChartComponent } from '../../shared/charts/chart.component';
import * as _ from 'underscore';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

    public statistics : [any];
    public labels = [];
    public data: any[];
    public options: any;

    constructor(
      private _statisticsService: StatisticsService
    ) {

    }

    ngOnInit() {

        this._statisticsService.getStatistics()
        .subscribe(response => {
            this.statistics = response;

            _.map(this.statistics, obj => {
                this.labels.push(obj['date'])
            })

            // this.data = [
            //     { data: [ 330, 600, 260, 700], label: 'Information' },
            //     { data: [ 120, 455, 100, 340], label: 'Low'},
            //     { data: [ 45, 67, 800, 500], label: 'Medium' },
            //     { data: [ 20, 255, 140, 640], label: 'High'},
            //     { data: [4, 167, 345, 720], label: 'Critical' }
            // ];
        })
    }
}
