
import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators }    from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { NotificationService } from '../service/notifications-service';
import { Notification } from '../model/notification.model';

@Component({
  selector: 'app-create',
  templateUrl: './notification-create.component.html',
  styleUrls: ['./notification-create.component.css']
})
export class NotificationCreateComponent implements OnInit {

    form: FormGroup;
    notification = new Notification();

    constructor(
        private _router: Router,
        private _notificationService: NotificationService
    ) {

    }

    ngOnInit() {

    }

    onSubmit(form:NgForm){

        const notification = new Notification();

        this._notificationService.add(form)
            .subscribe( x => {
                this._router.navigate(['notifications'])
            })
    }

}
