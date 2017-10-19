import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NotificationService } from './notifications/service/notifications-service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { HeaderComponent } from './layout/header/header.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { FooterComponent } from './layout/footer/footer.component';

import { NotificationsListComponent } from './notifications/list/notifications-list.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AssetManagementComponent } from './asset-management/asset-management.component';
import { ScansComponent } from './scans/scans.component';
import { AdminComponent } from './admin/admin.component';
import { NotificationDetailComponent } from './notifications/view/notification-detail.component';

import { HelpComponent } from './help/help.component';

// pipes
import { DatePipe } from '@angular/common';
import { NotificationCreateComponent } from './notifications/create/notification-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    DashboardComponent,
    NotificationsListComponent,
    ScansComponent,
    HelpComponent,
    NotificationDetailComponent,
    AssetManagementComponent,
    AdminComponent,
    NotificationCreateComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
      NotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
