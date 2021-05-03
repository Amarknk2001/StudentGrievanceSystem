import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
let CompseaPage = class CompseaPage {
    constructor(afs, route) {
        this.afs = afs;
        this.route = route;
        this.check = true;
        this.usrref = this.afs.collection('Users', ref => ref.where('isadmin', '==', this.check));
        this.usr$ = this.usrref.valueChanges();
    }
    ngOnInit() {
    }
    navigate(path) {
        this.route.navigateByUrl('/' + path);
    }
    navigatecomp(usee, path) {
        this.route.navigateByUrl('/' + path, { state: { info: usee } });
    }
};
CompseaPage = tslib_1.__decorate([
    Component({
        selector: 'app-compsea',
        templateUrl: './compsea.page.html',
        styleUrls: ['./compsea.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [AngularFirestore, Router])
], CompseaPage);
export { CompseaPage };
//# sourceMappingURL=compsea.page.js.map