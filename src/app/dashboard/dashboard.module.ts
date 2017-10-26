import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { ChartComponent } from '../shared/charts/chart.component';
import { StatisticsComponent } from '../statistics/view/statistics.component';
import { StatisticsService } from '../statistics/service/statistics-service';


@NgModule({
  declarations: [
    DashboardComponent,
    ChartComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    ChartsModule
  ],
  providers: [
      StatisticsService
  ],
  bootstrap: []
})
export class DashboardModule { }
