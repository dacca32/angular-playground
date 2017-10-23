import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { ChartComponent } from './charts/chart.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    labels = ['Herp', 'Derp', 'Merp', 'Ferp'];

    data = [
      { data: [330, 600, 260, 700], label: 'Information' },
      { data: [120, 455, 100, 340], label: 'Low'},
      { data: [45, 67, 800, 500], label: 'Medium' },
      { data: [20, 255, 140, 640], label: 'High'},
      { data: [4, 167, 345, 720], label: 'Critical' }
    ];

    options = {
      responsive: true
    };

    constructor(
      private router: Router
    ) { }

    ngOnInit() {

    }

    goToScans(event) {
      this.router.navigate(['/scans']);
    }


}
