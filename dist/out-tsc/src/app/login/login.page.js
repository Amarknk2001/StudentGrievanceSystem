import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
let LoginPage = class LoginPage {
    constructor(route, auuth) {
        this.route = route;
        this.auuth = auuth;
    }
    ngOnInit() {
    }
    login() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                this.res = yield this.auuth.auth.signInWithEmailAndPassword(this.email, this.password);
                this.email = '';
                this.password = '';
                this.navigate('home');
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    navigate(path) {
        this.route.navigateByUrl('/' + path);
    }
};
LoginPage = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.page.html',
        styleUrls: ['./login.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Router, AngularFireAuth])
], LoginPage);
export { LoginPage };
//# sourceMappingURL=login.page.js.map