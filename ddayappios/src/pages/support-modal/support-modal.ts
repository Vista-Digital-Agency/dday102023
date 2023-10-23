import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-support-modal',
  templateUrl: 'support-modal.html',
})
export class SupportModalPage {

  options : InAppBrowserOptions = {
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'yes',
    closebuttoncaption : 'Close',
    toolbar : 'yes'
  };

  modal: boolean;

  constructor(public viewCtrl: ViewController, public browser: InAppBrowser, public navParams: NavParams) {
    if (this.navParams.get('modal')) {
      this.modal = true;
    } else {
      this.modal = false;
    }
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  website(link: string) {
    this.browser.create("" + link, "_system", this.options);
  }

}
