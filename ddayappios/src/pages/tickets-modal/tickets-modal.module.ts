import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TicketsModalPage } from './tickets-modal';

@NgModule({
  declarations: [
    TicketsModalPage,
  ],
  imports: [
    IonicPageModule.forChild(TicketsModalPage),
  ],
})
export class TicketsModalPageModule {}
