import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CompseaPageRoutingModule } from './compsea-routing.module';
import { CompseaPage } from './compsea.page';
let CompseaPageModule = class CompseaPageModule {
};
CompseaPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            CompseaPageRoutingModule
        ],
        declarations: [CompseaPage]
    })
], CompseaPageModule);
export { CompseaPageModule };
//# sourceMappingURL=compsea.module.js.map