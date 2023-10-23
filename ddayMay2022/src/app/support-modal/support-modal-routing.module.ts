import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupportModalPage } from './support-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SupportModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupportModalPageRoutingModule {}
