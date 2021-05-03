import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ViewcompPage } from './viewcomp.page';
const routes = [
    {
        path: '',
        component: ViewcompPage
    }
];
let ViewcompPageRoutingModule = class ViewcompPageRoutingModule {
};
ViewcompPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ViewcompPageRoutingModule);
export { ViewcompPageRoutingModule };
//# sourceMappingURL=viewcomp-routing.module.js.map