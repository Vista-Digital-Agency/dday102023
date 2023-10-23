import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DdayTodayModalPage } from './dday-today-modal';

@NgModule({
  declarations: [
    DdayTodayModalPage,
  ],
  imports: [
    IonicPageModule.forChild(DdayTodayModalPage),
  ],
})
export class DdayTodayModalPageModule {}
