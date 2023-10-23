import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisitingPageRoutingModule } from './visiting-routing.module';

import { VisitingPage } from './visiting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisitingPageRoutingModule
  ],
  declarations: [VisitingPage]
})
export class VisitingPageModule {}
