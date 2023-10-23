import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomefrontTourSlidesPageRoutingModule } from './homefront-tour-slides-routing.module';

import { HomefrontTourSlidesPage } from './homefront-tour-slides.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomefrontTourSlidesPageRoutingModule
  ],
  declarations: [HomefrontTourSlidesPage]
})
export class HomefrontTourSlidesPageModule {}
