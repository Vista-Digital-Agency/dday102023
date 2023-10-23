import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CherryTreesSearchModalPageRoutingModule } from './cherry-trees-search-modal-routing.module';

import { CherryTreesSearchModalPage } from './cherry-trees-search-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CherryTreesSearchModalPageRoutingModule
  ],
  declarations: [CherryTreesSearchModalPage]
})
export class CherryTreesSearchModalPageModule {}
