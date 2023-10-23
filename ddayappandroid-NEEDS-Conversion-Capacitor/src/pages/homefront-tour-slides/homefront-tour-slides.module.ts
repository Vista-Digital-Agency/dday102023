import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomefrontTourSlidesPage } from './homefront-tour-slides';
import { PinchZoomModule } from 'ngx-pinch-zoom';

@NgModule({
  declarations: [
    HomefrontTourSlidesPage,
  ],
  imports: [
    IonicPageModule.forChild(HomefrontTourSlidesPage),
    PinchZoomModule
  ],
})
export class HomefrontTourSlidesPageModule {}
