import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomefrontTourPage } from './homefront-tour.page';

const routes: Routes = [
  {
    path: '',
    component: HomefrontTourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomefrontTourPageRoutingModule {}
