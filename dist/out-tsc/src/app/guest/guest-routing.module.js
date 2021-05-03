import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GuestPage } from './guest.page';
const routes = [
    {
        path: '',
        component: GuestPage
    }
];
let GuestPageRoutingModule = class GuestPageRoutingModule {
};
GuestPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], GuestPageRoutingModule);
export { GuestPageRoutingModule };
//# sourceMappingURL=guest-routing.module.js.map