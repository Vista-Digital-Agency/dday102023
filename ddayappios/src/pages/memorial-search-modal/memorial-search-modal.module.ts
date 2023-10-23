import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MemorialSearchModalPage } from './memorial-search-modal';

@NgModule({
  declarations: [
    MemorialSearchModalPage,
  ],
  imports: [
    IonicPageModule.forChild(MemorialSearchModalPage),
  ],
})
export class MemorialSearchModalPageModule {}
