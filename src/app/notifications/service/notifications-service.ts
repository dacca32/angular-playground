import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Notification } from '../model/notification.model';

@Injectable()
export class NotificationService {

    private url = 'http://localhost:3000';

    notificationAction = new EventEmitter<any>();

    constructor (
        private http: Http
    ) {}

    // Methods

    getNotifications() {

        let headers = new Headers();

        headers.append("Content-Type" , "application/json");

        return this.http.get(this.url + '/notifications', {
            headers: headers
        })
        .map(res => res.json());
    }

    createNewNotification(notification){

        let headers = new Headers();
        headers.append("Content-Type", "application/json");

		return this.http.post(this.url + '/notifications', JSON.stringify(notification), {
            headers: headers
        })
		.map(res => res.json());

    }

    updateNotification(notification){

        let headers = new Headers();
        headers.append("Content-Type", "application/json");

		return this.http.patch(this.url + '/notifications' + '/' + notification.id, JSON.stringify(notification), {
            headers: headers
        })
		.map(res => res.json());

    }

    deleteNotification(id){

        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        return this.http.delete(this.url + '/notifications/' + id, {
            headers: headers
        })
    }

    get(id: number) {

        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        return this.http.get("http://localhost:3000/notifications/" + id + "/", {
            headers: headers
        })
        .toPromise()
        .then((res: Response) => {

            let data = res.json();
            let notification = new Notification();

                notification.id = data.id;
                notification.content = data.content;
                notification.data = data.data;
                notification.level = data.level;
                notification.subject = data.subject;
                notification.unread = data.unread;
                notification.createdAt = data.createdAt;
                notification.updatedAt = data.updatedAt;

            return notification;
        })
        .catch(this.handleError);
    }

    private handleError (error: Response | any ){

        let errMsg: string;

        if( error instanceof Response ) {
            const body = error.json() || "";
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ""} ${err}`;
        }else{
            errMsg = error.message ? error.message : error.toString();
        }

        return Promise.reject(errMsg);

    }
}
