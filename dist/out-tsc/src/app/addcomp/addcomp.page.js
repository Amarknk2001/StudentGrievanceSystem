import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
let AddcompPage = class AddcompPage {
    constructor(actr, route, afs, auuth) {
        this.actr = actr;
        this.route = route;
        this.afs = afs;
        this.auuth = auuth;
        this.actr.queryParams.subscribe(params => {
            this.getdata = this.route.getCurrentNavigation().extras.state.info;
            this.compemail = this.getdata.Email;
        });
    }
    ngOnInit() {
    }
    submit() {
        this.useremail = this.auuth.auth.currentUser.email;
        this.afs.collection('Comps').add({
            compemail: this.compemail,
            Firstname: this.Firstname,
            useremail: this.useremail,
            subject: this.subject,
            Descp: this.des
        });
        this.navigate('home');
    }
    navigate(path) {
        this.route.navigateByUrl('/' + path);
    }
};
AddcompPage = tslib_1.__decorate([
    Component({
        selector: 'app-addcomp',
        templateUrl: './addcomp.page.html',
        styleUrls: ['./addcomp.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ActivatedRoute, Router, AngularFirestore, AngularFireAuth])
], AddcompPage);
export { AddcompPage };
//# sourceMappingURL=addcomp.page.js.map