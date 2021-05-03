import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
let ViewcompPage = class ViewcompPage {
    constructor(route, actr) {
        this.route = route;
        this.actr = actr;
        this.actr.queryParams.subscribe(params => {
            this.getdata = this.route.getCurrentNavigation().extras.state.info;
        });
    }
    ngOnInit() {
    }
};
ViewcompPage = tslib_1.__decorate([
    Component({
        selector: 'app-viewcomp',
        templateUrl: './viewcomp.page.html',
        styleUrls: ['./viewcomp.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Router, ActivatedRoute])
], ViewcompPage);
export { ViewcompPage };
//# sourceMappingURL=viewcomp.page.js.map