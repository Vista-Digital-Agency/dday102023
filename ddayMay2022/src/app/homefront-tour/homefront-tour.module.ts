import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomefrontTourPageRoutingModule } from './homefront-tour-routing.module';

import { HomefrontTourPage } from './homefront-tour.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomefrontTourPageRoutingModule
  ],
  declarations: [HomefrontTourPage]
})
export class HomefrontTourPageModule {}
