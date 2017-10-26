import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class StatisticsService {

    private url = 'http://localhost:3000';

    constructor (
        private http: Http
    ) {}

    // Methods

    getStatistics() {

        let headers = new Headers();

        headers.append("Content-Type" , "application/json");

        return this.http.get(this.url + '/statistics', {
            headers: headers
        })
        .map(res => res.json());
    }

}
