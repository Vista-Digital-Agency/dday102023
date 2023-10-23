import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpecialOpeningsModalPageRoutingModule } from './special-openings-modal-routing.module';

import { SpecialOpeningsModalPage } from './special-openings-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpecialOpeningsModalPageRoutingModule
  ],
  declarations: [SpecialOpeningsModalPage]
})
export class SpecialOpeningsModalPageModule {}
