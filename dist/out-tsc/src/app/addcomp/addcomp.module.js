import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddcompPageRoutingModule } from './addcomp-routing.module';
import { AddcompPage } from './addcomp.page';
let AddcompPageModule = class AddcompPageModule {
};
AddcompPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            AddcompPageRoutingModule
        ],
        declarations: [AddcompPage]
    })
], AddcompPageModule);
export { AddcompPageModule };
//# sourceMappingURL=addcomp.module.js.map