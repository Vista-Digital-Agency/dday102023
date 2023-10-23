import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HoursModalPage } from './hours-modal';

@NgModule({
  declarations: [
    HoursModalPage,
  ],
  imports: [
    IonicPageModule.forChild(HoursModalPage),
  ],
})
export class HoursModalPageModule {}
