import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GuestPageRoutingModule } from './guest-routing.module';
import { GuestPage } from './guest.page';
let GuestPageModule = class GuestPageModule {
};
GuestPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            GuestPageRoutingModule
        ],
        declarations: [GuestPage]
    })
], GuestPageModule);
export { GuestPageModule };
//# sourceMappingURL=guest.module.js.map