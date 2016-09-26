import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {ListClassComponent} from "./list-class/list-class.component";
import {WelcomePageComponent} from "./welcome-page/welcome-page.component";
import {EditProfileComponent} from "./edit-profile/edit-profile.component";
import {LogoutComponent} from "./logout/logout.component";

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full'
    },
    {
        path: 'welcome',
        component: WelcomePageComponent
    },
    {
        path: 'profile',
        component: EditProfileComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'logout',
        component: LogoutComponent
    },
    {
        path: '404',
        component: PageNotFoundComponent
    },
    {
        path: 'class',
        component: ListClassComponent
    },
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);