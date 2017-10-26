import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    constructor(
      private router: Router
    ) { }

    ngOnInit() {

    }

    goToScans(event) {
      this.router.navigate(['/scans']);
    }


}
