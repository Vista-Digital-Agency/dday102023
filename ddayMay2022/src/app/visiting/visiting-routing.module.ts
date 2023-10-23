import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisitingPage } from './visiting.page';

const routes: Routes = [
  {
    path: '',
    component: VisitingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisitingPageRoutingModule {}
