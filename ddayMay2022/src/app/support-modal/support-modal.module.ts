import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupportModalPageRoutingModule } from './support-modal-routing.module';

import { SupportModalPage } from './support-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupportModalPageRoutingModule
  ],
  declarations: [SupportModalPage]
})
export class SupportModalPageModule {}
