import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TicketsModalPageRoutingModule } from './tickets-modal-routing.module';

import { TicketsModalPage } from './tickets-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TicketsModalPageRoutingModule
  ],
  declarations: [TicketsModalPage]
})
export class TicketsModalPageModule {}
