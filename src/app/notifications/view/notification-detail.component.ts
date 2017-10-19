import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Notification } from '../model/notification.model';
import { NotificationService } from '../service/notifications-service';

@Component({
  selector: 'app-notification',
  moduleId: module.id,
  templateUrl: './notification-detail.component.html',
  styleUrls: ['./notification-detail.component.css']
})
export class NotificationDetailComponent implements OnInit {

  notification = new Notification();

  constructor(
      private notificationService: NotificationService,
      private route: ActivatedRoute
  ) { }

  ngOnInit() {

    const id = this.route.snapshot.params["id"];

    this.notificationService.get(id)
    .then((notification) => {
        this.notification = notification;
    })

    // or you can use the paramMap observable and subsribe to it
    // remember section 10 lecture 129 of mosh's tut
    //   this.route.paramMap.subscribe(
    //       params => {
    //           console.log(params)
    //           // convert to number by placing + in front of it
    //         //   this.notification.id = +params.get('id');
    //       }
    //   )
  }
}
