import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
let HomePage = class HomePage {
    constructor(route, auuth, afs) {
        this.route = route;
        this.auuth = auuth;
        this.afs = afs;
        this.isadmin = false;
        this.canaddcomp = false;
    }
    ngOnInit() {
        this.auuth.auth.onAuthStateChanged((user) => {
            if (user) {
                this.email = this.auuth.auth.currentUser.email;
                console.log(this.email);
                this.usrref = this.afs.collection('Users', ref => ref.where('Email', '==', this.email));
                this.usr$ = this.usrref.valueChanges();
                this.usr$.subscribe(user => {
                    this.currentuser = user[0];
                    console.log(user);
                    if (this.currentuser.isadmin) {
                        this.canaddcomp = false;
                        this.isadmin = true;
                        this.compref = this.afs.collection('Comps', ref => ref.where('compemail', '==', this.email));
                        this.comp$ = this.compref.valueChanges();
                    }
                    else {
                        this.canaddcomp = true;
                        this.isadmin = false;
                        this.compref = this.afs.collection('Comps', ref => ref.where('useremail', '==', this.email));
                        this.comp$ = this.compref.valueChanges();
                    }
                });
            }
        });
    }
    navigate(path) {
        this.route.navigateByUrl('/' + path);
    }
    navigatecomp(usee, path) {
        this.route.navigateByUrl('/' + path, { state: { info: usee } });
    }
    logout() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                yield this.auuth.auth.signOut();
                this.navigate('login');
            }
            catch (e) {
                console.log("no log in found");
            }
        });
    }
};
HomePage = tslib_1.__decorate([
    Component({
        selector: 'app-home',
        templateUrl: 'home.page.html',
        styleUrls: ['home.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Router, AngularFireAuth, AngularFirestore])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.page.js.map