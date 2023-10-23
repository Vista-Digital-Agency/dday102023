import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomefrontTourSlidesPage } from './homefront-tour-slides.page';

const routes: Routes = [
  {
    path: '',
    component: HomefrontTourSlidesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomefrontTourSlidesPageRoutingModule {}
