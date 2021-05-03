import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddcompPage } from './addcomp.page';

const routes: Routes = [
  {
    path: '',
    component: AddcompPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddcompPageRoutingModule {}
