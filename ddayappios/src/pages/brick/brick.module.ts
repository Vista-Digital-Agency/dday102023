import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BrickPage } from './brick';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    BrickPage,
  ],
  imports: [
    IonicPageModule.forChild(BrickPage),
    PipesModule
  ],
})
export class BrickPageModule {}
