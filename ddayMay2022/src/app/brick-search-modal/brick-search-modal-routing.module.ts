import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrickSearchModalPage } from './brick-search-modal.page';

const routes: Routes = [
  {
    path: '',
    component: BrickSearchModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrickSearchModalPageRoutingModule {}
