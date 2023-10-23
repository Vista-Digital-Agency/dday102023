import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HoursModalPage } from './hours-modal.page';

const routes: Routes = [
  {
    path: '',
    component: HoursModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HoursModalPageRoutingModule {}
