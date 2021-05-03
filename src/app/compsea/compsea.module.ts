import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompseaPageRoutingModule } from './compsea-routing.module';

import { CompseaPage } from './compsea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompseaPageRoutingModule
  ],
  declarations: [CompseaPage]
})
export class CompseaPageModule {}
