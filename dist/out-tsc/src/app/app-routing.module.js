import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
const routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
    {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
    },
    {
        path: 'register',
        loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
    },
    {
        path: 'compsea',
        loadChildren: () => import('./compsea/compsea.module').then(m => m.CompseaPageModule)
    },
    {
        path: 'addcomp',
        loadChildren: () => import('./addcomp/addcomp.module').then(m => m.AddcompPageModule)
    },
    {
        path: 'viewcomp',
        loadChildren: () => import('./viewcomp/viewcomp.module').then(m => m.ViewcompPageModule)
    },
    {
        path: 'guest',
        loadChildren: () => import('./guest/guest.module').then(m => m.GuestPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [
            RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
        ],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map