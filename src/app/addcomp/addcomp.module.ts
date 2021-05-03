import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddcompPageRoutingModule } from './addcomp-routing.module';

import { AddcompPage } from './addcomp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddcompPageRoutingModule
  ],
  declarations: [AddcompPage]
})
export class AddcompPageModule {}
