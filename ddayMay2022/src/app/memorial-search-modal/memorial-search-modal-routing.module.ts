import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemorialSearchModalPage } from './memorial-search-modal.page';

const routes: Routes = [
  {
    path: '',
    component: MemorialSearchModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemorialSearchModalPageRoutingModule {}
