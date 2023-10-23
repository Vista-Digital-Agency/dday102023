import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeneralInfoModalPage } from './general-info-modal';

@NgModule({
  declarations: [
    GeneralInfoModalPage,
  ],
  imports: [
    IonicPageModule.forChild(GeneralInfoModalPage),
  ],
})
export class GeneralInfoModalPageModule {}
