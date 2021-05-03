import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompseaPage } from './compsea.page';

const routes: Routes = [
  {
    path: '',
    component: CompseaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompseaPageRoutingModule {}
