import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BedfordBoysModalPageRoutingModule } from './bedford-boys-modal-routing.module';

import { BedfordBoysModalPage } from './bedford-boys-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BedfordBoysModalPageRoutingModule
  ],
  declarations: [BedfordBoysModalPage]
})
export class BedfordBoysModalPageModule {}
