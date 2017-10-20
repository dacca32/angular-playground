
import { Component, OnInit} from '@angular/core';
import { environment } from 'environments/environment';
import { Notification } from '../model/notification.model';
import { NotificationService } from '../service/notifications-service';
import { NgbdModalBasic } from '../../shared/modal/modal.component';

@Component({
  selector: 'app-notifications-list',
  moduleId: module.id,
  templateUrl: './notifications-list.component.html',
  styleUrls: ['./notifications-list.component.css']
})
export class NotificationsListComponent implements OnInit {

    notifications: any[];
    p: number = 1;

    constructor(
        private _notificationService: NotificationService
    ) {

        // subscribe to the notification event emitter on the service
        // which contains the notification id from the modal component
        // and use this to splice the entry from the table as it has been
        // confirmed that the user wishes to delete it

        this._notificationService.notificationAction.subscribe(
            (data:number) => {

                let index = this.notifications.map(function(elem){
                    return elem.id
                }).indexOf(data);

                this.notifications.splice(index, 1);
            }
        )
    }

    ngOnInit() {

        this._notificationService.getNotifications()
        .subscribe(response => {
            this.notifications = response
        })

    }

    deleteNotification(notification){

        this._notificationService.deleteNotification(notification.id)
        .subscribe(response => {
            let index = this.notifications.indexOf(notification);
            this.notifications.splice(index, 1);
        })
    }

}
