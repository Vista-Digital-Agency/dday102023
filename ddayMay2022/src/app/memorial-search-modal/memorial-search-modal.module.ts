import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MemorialSearchModalPageRoutingModule } from './memorial-search-modal-routing.module';

import { MemorialSearchModalPage } from './memorial-search-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MemorialSearchModalPageRoutingModule
  ],
  declarations: [MemorialSearchModalPage]
})
export class MemorialSearchModalPageModule {}
