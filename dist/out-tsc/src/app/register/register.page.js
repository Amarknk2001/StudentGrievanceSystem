import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
let RegisterPage = class RegisterPage {
    constructor(route, auuth, afs) {
        this.route = route;
        this.auuth = auuth;
        this.afs = afs;
        this.usr = {};
    }
    ngOnInit() {
    }
    create() {
        this.auuth.auth.createUserWithEmailAndPassword(this.email, this.password).then((data) => { }).catch((error) => { console.log(error); });
    }
    navigate(path) {
        this.route.navigateByUrl('/' + path);
    }
    createdata(ussr) {
        this.usr.isadmin = false;
        this.afs.collection('Users').add({
            FirstName: this.usr.FirstName,
            LastName: this.usr.LastName,
            Email: this.usr.Email,
            Department: this.usr.Department,
            Year: this.usr.Year,
            isadmin: this.usr.isadmin,
        });
        this.usr = {};
        this.navigate('home');
    }
};
RegisterPage = tslib_1.__decorate([
    Component({
        selector: 'app-register',
        templateUrl: './register.page.html',
        styleUrls: ['./register.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Router, AngularFireAuth, AngularFirestore])
], RegisterPage);
export { RegisterPage };
//# sourceMappingURL=register.page.js.map