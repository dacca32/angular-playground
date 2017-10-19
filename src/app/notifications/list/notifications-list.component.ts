
import { Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';

import { Notification } from '../model/notification.model';
import { NotificationService } from '../service/notifications-service';

@Component({
  selector: 'app-notifications-list',
  moduleId: module.id,
  templateUrl: './notifications-list.component.html',
  styleUrls: ['./notifications-list.component.css']
})
export class NotificationsListComponent implements OnInit {

    notification: Notification[];

    constructor(
        private notificationService: NotificationService
    ) {}

    ngOnInit() {

        this.notificationService.list()
        .then((notification => {
            this.notification = notification
        }))

    }

}
