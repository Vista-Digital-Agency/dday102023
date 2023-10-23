import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
import { TicketsModalPage } from '../tickets-modal/tickets-modal';
import { GroupModalPage } from '../group-modal/group-modal';
import { HoursModalPage } from '../hours-modal/hours-modal';
import { SpecialOpeningsModalPage } from '../special-openings-modal/special-openings-modal';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-visiting',
  templateUrl: 'visiting.html',
})
export class VisitingPage {

  ticketsModal: any = TicketsModalPage;
  groupModal: any = GroupModalPage;
  hoursModal: any = HoursModalPage;
  specialOpeningModal: any = SpecialOpeningsModalPage;

  options : InAppBrowserOptions = {
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'yes',
    closebuttoncaption : 'Close',
    toolbar : 'yes'
  };

  constructor(public modalCtrl: ModalController, public browser: InAppBrowser) {
  }

  openModal(modal: any) {
    let myModal = this.modalCtrl.create(modal);
    myModal.present();
  }

  openFieldTrips() {
    this.browser.create("https://www.dday.org/field-trips/", "_system", this.options);
  }

  openMembership() {
    this.browser.create("https://www.dday.org/overlord-society/", "_system", this.options);
  }

}
