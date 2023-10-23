import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';


@IonicPage()
@Component({
  selector: 'page-partners',
  templateUrl: 'partners.html',
})
export class PartnersPage {

  options : InAppBrowserOptions = {
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'yes',
    closebuttoncaption : 'Close',
    toolbar : 'yes'
  };

  constructor(private browser: InAppBrowser) {
  }

  openWeb(link: string) {
    this.browser.create(link, "_system", this.options);
  }

}
