import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BrickSearchModalPage } from './brick-search-modal';
import { PinchZoomModule } from 'ngx-pinch-zoom';

@NgModule({
  declarations: [
    BrickSearchModalPage,
  ],
  imports: [
    IonicPageModule.forChild(BrickSearchModalPage),
    PinchZoomModule
  ],
})
export class BrickSearchModalPageModule {}
