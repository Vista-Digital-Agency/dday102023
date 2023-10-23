import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrickPage } from './brick.page';

const routes: Routes = [
  {
    path: '',
    component: BrickPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrickPageRoutingModule {}
