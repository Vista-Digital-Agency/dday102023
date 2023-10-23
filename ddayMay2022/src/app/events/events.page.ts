import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, LoadingController, ModalController } from '@ionic/angular';
import { EventModalPage } from '../event-modal/event-modal.page';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage {

  //@ViewChild(IonContent) content: IonContent;

  calEvents;
  events;

  eventSource;
  viewTitle;
  
  constructor(public eventsProvider: EventsService,
              public loadingCtrl: LoadingController,
              public modalCtrl: ModalController,
              //private screenOrientation: ScreenOrientation
              ) {
    this.getEvents();
    
  }

    ionViewDidEnter() {
        /*this.screenOrientation.onChange().subscribe(
            () => {
            setTimeout( () => { 
                this.content.resize();  
                console.log('changed');
            }, 100);
        });*/
    }
  

  isToday: boolean;
  calendar = {
      mode: 'month',
      currentDate: new Date()
  }; // these are the variable used by the calendar.
  loadEvents() {
    this.eventSource = this.calEvents;
  };

  async getEvents() {

    /*let loading = this.loadingCtrl.create({
      content: `
      <ion-spinner></ion-spinner>`
    });*/
    const loading = await this.loadingCtrl.create({spinner: `circles`});

    this.calEvents = [];
    loading.present();

    this.eventsProvider.getEvents().subscribe(
      result => {
        console.log(result['data']);
        //var eventData = JSON.parse(result['data']);
        //console.log(eventData['events']);
        //this.events = eventData['events'];

        this.events = result['data']['events'];
  
        //console.log(result['events']);

      },
      err =>{
        console.error("Error : "+JSON.stringify(err));
        loading.dismiss();
      } ,
      () => {
        loading.dismiss();

        for (var i = 0; i < this.events.length; i++) {
            
                var startTime;
                var startTimeStr
                var endTime;
                var endTimeStr

            if(this.events[i].status !== 'cancelled') {
                if (this.events[i]['all_day'] == true) {
                    startTimeStr = this.events[i]['start_date'].replace(/-/g, "/");
                    startTimeStr = startTimeStr.substr(0,startTimeStr.indexOf(' '));
                    startTime = new Date("" + startTimeStr);

                    endTimeStr = this.events[i]['end_date'].replace(/-/g, "/");//this.events[i]['end_date'].replace(/-/g, "/");
                    endTimeStr = endTimeStr.substr(0,endTimeStr.indexOf(' '));
                    endTime = new Date(endTimeStr);
                    //console.log(this.events[i]);
                    console.log(endTime);
                    this.calEvents.push({
                        title: '' + this.events[i]['title'],
                        startTime: startTime,
                        endTime: endTime,
                        allDay: true,
                        description: '' + this.events[i]['description'],
                        location: '' + this.events[i]['venue']['venue'] + ', ' + this.events[i]['venue']['city'] + ', ' + this.events[i]['venue']['stateprovince']
                    });
                } else {
                    startTimeStr = this.events[i]['start_date'].replace(/-/g, "/");
                    startTime = new Date("" + startTimeStr);

                    endTimeStr = this.events[i]['end_date'].replace(/-/g, "/");
                    endTime = new Date("" + endTimeStr);
                    //console.log(endTimeStr);
                    this.calEvents.push({
                        title: '' + this.events[i]['title'],
                        startTime: startTime,
                        endTime: endTime,
                        allDay: false,
                        description: '' + this.events[i]['description'],
                        location: '' + this.events[i]['venue']['venue'] + ', ' + this.events[i]['venue']['city'] + ', ' + this.events[i]['venue']['stateprovince']
                    });
                }
            }

        }

        this.loadEvents();
      });
  }

  async eventSelected(event: any) {
    //console.log(event);
    /*let myModal = this.modalCtrl.create(EventModalPage, { 'event': event });
    myModal.present();*/

    const modal: HTMLIonModalElement =
        await this.modalCtrl.create({
        component: EventModalPage,
        componentProps: {
            'event': event
          }
    });
    await modal.present();
  }

  onViewTitleChanged(title) {
      this.viewTitle = title;
  }

  onEventSelected(event) {
      console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
  }

  today() {
      this.calendar.currentDate = new Date();
  }

  onCurrentDateChanged(event:Date) {
      var today = new Date();
      today.setHours(0, 0, 0, 0);
      event.setHours(0, 0, 0, 0);
      this.isToday = today.getTime() === event.getTime();
  }

  markDisabled = (date:Date) => {
      var current = new Date();
      current.setHours(0, 0, 0);
      return date < current;
  };
}
