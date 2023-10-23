import { Component } from '@angular/core';
import { HomefrontTourSlidesPage } from '../homefront-tour-slides/homefront-tour-slides.page';

@Component({
  selector: 'app-homefront-tour',
  templateUrl: './homefront-tour.page.html',
  styleUrls: ['./homefront-tour.page.scss'],
})
export class HomefrontTourPage {

  homefrontTourSlides: any = HomefrontTourSlidesPage;

  constructor(/*private browser: InAppBrowser*/) {
  }

  openTour() {
    /*this.browser.create("", "_system", this.options);*/
    //window.open("https://www.theclio.com/web/tour/summary?id=660",'_system', 'location=yes');

    window.open("https://theclio.com/tour/660",'_system', 'location=yes');
  }
}
