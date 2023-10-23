import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpecialOpeningsModalPage } from './special-openings-modal';

@NgModule({
  declarations: [
    SpecialOpeningsModalPage,
  ],
  imports: [
    IonicPageModule.forChild(SpecialOpeningsModalPage),
  ],
})
export class SpecialOpeningsModalPageModule {}
