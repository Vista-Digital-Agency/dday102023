import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeneralInfoModalPageRoutingModule } from './general-info-modal-routing.module';

import { GeneralInfoModalPage } from './general-info-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeneralInfoModalPageRoutingModule
  ],
  declarations: [GeneralInfoModalPage]
})
export class GeneralInfoModalPageModule {}
