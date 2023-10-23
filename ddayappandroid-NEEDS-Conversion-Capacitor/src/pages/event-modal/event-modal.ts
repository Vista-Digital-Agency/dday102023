import { Component, ViewChild } from '@angular/core';
import { IonicPage, ViewController, NavParams, Content } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';

@IonicPage()
@Component({
  selector: 'page-event-modal',
  templateUrl: 'event-modal.html',
})
export class EventModalPage {

  @ViewChild(Content) content: Content;

  event: any;

  constructor(public viewCtrl: ViewController, 
              public navParams: NavParams,
              private calendar: Calendar
              ) {
  this.event = navParams.get('event');
  console.log(this.event);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    this.content.resize();
  }

  decodeHTMLEntities(text) {
    var entities = [
        ['amp', '&'],
        ['apos', '\''],
        ['#x27', '\''],
        ['#x2F', '/'],
        ['#39', '\''],
        ['#47', '/'],
        ['lt', '<'],
        ['gt', '>'],
        ['nbsp', ' '],
        ['quot', '"']
    ];

    for (var i = 0, max = entities.length; i < max; ++i) 
        text = text.replace(new RegExp('&'+entities[i][0]+';', 'g'), entities[i][1]);

    return text;
}

  addToCal(event: any) {

      var title = event.title.replace(/&#(\d+);/g, function(match, dec) {
        return String.fromCharCode(dec);
      });

      var location = event.location.replace(/&#(\d+);/g, function(match, dec) {
        return String.fromCharCode(dec);
      });

      this.calendar.createEventInteractively(title, location, '', event.startTime, event.endTime)
      .then(
        (msg) => { console.log(msg); },
        (err) => { console.log(err); }
      );
    
  }

}
