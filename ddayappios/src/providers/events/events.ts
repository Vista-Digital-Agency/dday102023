import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http';
import { Observable } from 'rxjs';

@Injectable()
export class EventsProvider {

  constructor(//public http: HttpClient
    private http: HTTP
    ) {
  }

  getEvents() {
    /*return this.http.get("https://dday.org/wp-json/tribe/events/v1/events?per_page=100", {}, {}).then(data => {
      return data.data;
    })*/
    this.http.setDataSerializer('json');
    return Observable
    .fromPromise(this.http.get("https://dday.org/wp-json/tribe/events/v1/events?per_page=100", {}, {}));
  }

}
