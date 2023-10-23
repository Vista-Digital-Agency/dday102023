import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HTTP } from '@awesome-cordova-plugins/http';

import { Http, HttpResponse } from '@capacitor-community/http';
//import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {from} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(//public http: HttpClient
    //private http: HTTP

    ) {
  }

  getEvents(): Observable<any> {

    const options = {
      url: 'https://dday.org/wp-json/tribe/events/v1/events?per_page=100',
      headers: {},
      params: {},
    };

    /*return await this.http.get(options).then(data => {
      return data.data;
    });*/

    /*this.http.setDataSerializer('json');
    return Observable
    .fromPromise(this.http.get("https://dday.org/wp-json/tribe/events/v1/events?per_page=100", {}, {}));*/
      
    return from(Http.get(options));
  }
}
