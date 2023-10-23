import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-tickets-modal',
  templateUrl: 'tickets-modal.html',
})
export class TicketsModalPage {

  options : InAppBrowserOptions = {
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'yes',
    closebuttoncaption : 'Close',
    toolbar : 'yes'
  };

  constructor(public viewCtrl: ViewController, public browser: InAppBrowser) {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  purchaseTicket() {
    // OLD this.browser.create("https://www.dday.org/purchase-tickets/", "_system", this.options);
    this.browser.create("https://www.dday.org/tickets/", "_system", this.options);
  }

}
