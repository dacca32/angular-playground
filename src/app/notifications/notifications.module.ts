import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// Npm packages

import { NgbdModalBasic } from '../shared/modal/modal.component';
import { NgxPaginationModule } from 'ngx-pagination';

// Services

import { NotificationService } from './service/notifications-service';

// Components

import { NotificationsListComponent } from './list/notifications-list.component';
import { NotificationDetailComponent } from './view/notification-detail.component';
import { NotificationCreateComponent } from './create/notification-create.component';

// pipes

import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    NotificationsListComponent,
    NotificationDetailComponent,
    NotificationCreateComponent,
    NgbdModalBasic
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgxPaginationModule
  ],
  providers: [
      NotificationService
  ],
  bootstrap: []
})
export class NotificationsModule { }
