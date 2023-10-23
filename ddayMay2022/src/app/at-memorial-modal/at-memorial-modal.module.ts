import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtMemorialModalPageRoutingModule } from './at-memorial-modal-routing.module';

import { AtMemorialModalPage } from './at-memorial-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtMemorialModalPageRoutingModule
  ],
  declarations: [AtMemorialModalPage]
})
export class AtMemorialModalPageModule {}
