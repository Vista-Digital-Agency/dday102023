import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CherryTreesSearchModalPage } from './cherry-trees-search-modal.page';

const routes: Routes = [
  {
    path: '',
    component: CherryTreesSearchModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CherryTreesSearchModalPageRoutingModule {}
