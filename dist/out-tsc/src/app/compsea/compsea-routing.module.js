import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CompseaPage } from './compsea.page';
const routes = [
    {
        path: '',
        component: CompseaPage
    }
];
let CompseaPageRoutingModule = class CompseaPageRoutingModule {
};
CompseaPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], CompseaPageRoutingModule);
export { CompseaPageRoutingModule };
//# sourceMappingURL=compsea-routing.module.js.map