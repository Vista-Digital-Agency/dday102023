import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtMemorialModalPage } from './at-memorial-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AtMemorialModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtMemorialModalPageRoutingModule {}
