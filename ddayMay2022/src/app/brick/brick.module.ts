import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrickPageRoutingModule } from './brick-routing.module';

import { BrickPage } from './brick.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrickPageRoutingModule
  ],
  declarations: [BrickPage]
})
export class BrickPageModule {}
