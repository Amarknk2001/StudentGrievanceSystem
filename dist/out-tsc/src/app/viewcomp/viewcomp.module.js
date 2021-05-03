import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ViewcompPageRoutingModule } from './viewcomp-routing.module';
import { ViewcompPage } from './viewcomp.page';
let ViewcompPageModule = class ViewcompPageModule {
};
ViewcompPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ViewcompPageRoutingModule
        ],
        declarations: [ViewcompPage]
    })
], ViewcompPageModule);
export { ViewcompPageModule };
//# sourceMappingURL=viewcomp.module.js.map