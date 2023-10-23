import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DdayTodayModalPageRoutingModule } from './dday-today-modal-routing.module';

import { DdayTodayModalPage } from './dday-today-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DdayTodayModalPageRoutingModule
  ],
  declarations: [DdayTodayModalPage]
})
export class DdayTodayModalPageModule {}
