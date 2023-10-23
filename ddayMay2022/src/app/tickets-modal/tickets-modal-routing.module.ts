import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TicketsModalPage } from './tickets-modal.page';

const routes: Routes = [
  {
    path: '',
    component: TicketsModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketsModalPageRoutingModule {}
