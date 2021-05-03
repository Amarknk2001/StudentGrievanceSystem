import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddcompPage } from './addcomp.page';
const routes = [
    {
        path: '',
        component: AddcompPage
    }
];
let AddcompPageRoutingModule = class AddcompPageRoutingModule {
};
AddcompPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], AddcompPageRoutingModule);
export { AddcompPageRoutingModule };
//# sourceMappingURL=addcomp-routing.module.js.map