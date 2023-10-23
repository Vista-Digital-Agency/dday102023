import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-homefront-tour-slides',
  templateUrl: 'homefront-tour-slides.html',
})
export class HomefrontTourSlidesPage {

  slides: string = 'false';

  constructor() {
  }

  startSlides() {
    this.slides = 'true';
  }

}
