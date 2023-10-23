import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CherryTreesPage } from './cherry-trees.page';

const routes: Routes = [
  {
    path: '',
    component: CherryTreesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CherryTreesPageRoutingModule {}
