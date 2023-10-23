import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpecialOpeningsModalPage } from './special-openings-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SpecialOpeningsModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpecialOpeningsModalPageRoutingModule {}
