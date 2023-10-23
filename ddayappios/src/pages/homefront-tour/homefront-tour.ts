import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
//import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { HomefrontTourSlidesPage } from '../homefront-tour-slides/homefront-tour-slides';

@IonicPage()
@Component({
  selector: 'page-homefront-tour',
  templateUrl: 'homefront-tour.html',
})
export class HomefrontTourPage {

  /*options : InAppBrowserOptions = {
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'yes',
    closebuttoncaption : 'Close',
    toolbar : 'yes'
  };*/

  homefrontTourSlides: any = HomefrontTourSlidesPage;

  constructor(/*private browser: InAppBrowser*/) {
  }

  openTour() {
    /*this.browser.create("", "_system", this.options);*/
    //window.open("https://www.theclio.com/web/tour/summary?id=660",'_system', 'location=yes');
    window.open("https://theclio.com/tour/660",'_system', 'location=yes');
  }
  

}
