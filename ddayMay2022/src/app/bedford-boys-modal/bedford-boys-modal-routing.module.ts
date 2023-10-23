import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BedfordBoysModalPage } from './bedford-boys-modal.page';

const routes: Routes = [
  {
    path: '',
    component: BedfordBoysModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BedfordBoysModalPageRoutingModule {}
