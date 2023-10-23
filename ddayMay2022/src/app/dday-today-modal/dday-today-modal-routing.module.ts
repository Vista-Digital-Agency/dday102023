import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DdayTodayModalPage } from './dday-today-modal.page';

const routes: Routes = [
  {
    path: '',
    component: DdayTodayModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DdayTodayModalPageRoutingModule {}
