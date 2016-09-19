import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {ListClassComponent} from "./list-class/list-class.component";

const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '404',
        component: PageNotFoundComponent
    },
    {
        path: 'class',
        component: ListClassComponent
    }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);