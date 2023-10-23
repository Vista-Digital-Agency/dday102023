import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrickSearchModalPageRoutingModule } from './brick-search-modal-routing.module';

import { BrickSearchModalPage } from './brick-search-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrickSearchModalPageRoutingModule
  ],
  declarations: [BrickSearchModalPage]
})
export class BrickSearchModalPageModule {}
