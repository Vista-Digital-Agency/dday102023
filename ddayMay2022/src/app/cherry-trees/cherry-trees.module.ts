import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CherryTreesPageRoutingModule } from './cherry-trees-routing.module';

import { CherryTreesPage } from './cherry-trees.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CherryTreesPageRoutingModule
  ],
  declarations: [CherryTreesPage]
})
export class CherryTreesPageModule {}
