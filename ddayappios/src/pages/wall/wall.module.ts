import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WallPage } from './wall';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    WallPage,
  ],
  imports: [
    IonicPageModule.forChild(WallPage),
    PipesModule
  ],
})
export class WallPageModule {}
