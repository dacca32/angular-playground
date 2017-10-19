import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { CommonModule } from '@angular/common';

import { NotificationCreateComponent } from '../notifications/create/notification-create.component';
import { NotificationsListComponent } from '../notifications/list/notifications-list.component';
import { NotificationDetailComponent } from '../notifications/view/notification-detail.component';

const routes: Routes = [
    { path: "notifications", component: NotificationsListComponent },
    { path: "notifications/create", component: NotificationCreateComponent },
    { path: "notifications/:id", component: NotificationDetailComponent }
]

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
    // CommonModule
  ],
  exports: [
      RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
