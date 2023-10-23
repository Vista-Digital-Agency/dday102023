import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CherryTreesPage } from './cherry-trees';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    CherryTreesPage,
  ],
  imports: [
    IonicPageModule.forChild(CherryTreesPage),
    PipesModule
  ],
})
export class CherryTreesPageModule {}
