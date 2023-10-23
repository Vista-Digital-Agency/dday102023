import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HoursModalPageRoutingModule } from './hours-modal-routing.module';

import { HoursModalPage } from './hours-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HoursModalPageRoutingModule
  ],
  declarations: [HoursModalPage]
})
export class HoursModalPageModule {}
