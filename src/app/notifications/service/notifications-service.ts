import {  Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Notification } from '../model/notification.model';

@Injectable()
export class NotificationService {

    constructor (
        private http: Http
    ) {}

    // Methods

    list() {

        let headers = new Headers();

        headers.append("Content-Type" , "application/json");

        return this.http.get('http://localhost:3000/notifications', {
            headers: headers
        })
        .toPromise()
        .then( (res: Response ) => {

            let data = res.json();
            let allNotifications = [];

            data.forEach((entry) => {

                // console.log(data);

                let notification = new Notification();

                notification.id = entry.id;
                notification.content = entry.content;
                notification.data = entry.data;
                notification.level = entry.level;
                notification.subject = entry.subject;
                notification.unread = entry.unread;
                notification.createdAt = entry.createdAt;
                notification.updatedAt = entry.updatedAt;

                allNotifications.push(notification);
            })

            return allNotifications;
        })
        .catch(this.handleError);
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

    add(notification){

        let headers = new Headers();
        headers.append("Content-Type", "application/json");

		return this.http.post("http://localhost:3000/notifications/", JSON.stringify(notification), {headers: headers})
			.map(res => res.json());

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
