import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneralInfoModalPage } from './general-info-modal.page';

const routes: Routes = [
  {
    path: '',
    component: GeneralInfoModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneralInfoModalPageRoutingModule {}
