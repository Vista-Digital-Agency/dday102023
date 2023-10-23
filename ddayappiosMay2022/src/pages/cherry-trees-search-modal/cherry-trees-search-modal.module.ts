import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CherryTreesSearchModalPage } from './cherry-trees-search-modal';
import { PinchZoomModule } from 'ngx-pinch-zoom';

@NgModule({
  declarations: [
    CherryTreesSearchModalPage,
  ],
  imports: [
    IonicPageModule.forChild(CherryTreesSearchModalPage),
    PinchZoomModule
  ],
})
export class CherryTreesSearchModalPageModule {}
