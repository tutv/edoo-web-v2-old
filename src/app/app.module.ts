import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {routing, appRoutingProviders}  from './app.routes';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {NotiComponent} from './noti/noti.component';
import {NavbarComponent} from './navbar/navbar.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ListClassComponent} from './list-class/list-class.component';
import {WelcomePageComponent} from './welcome-page/welcome-page.component';
import {EditProfileComponent} from './edit-profile/edit-profile.component';
import {LogoutComponent} from "./logout/logout.component";
// import { ChangePasswordComponent } from './change-password/change-password.component';


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        NotiComponent,
        NavbarComponent,
        PageNotFoundComponent,
        ListClassComponent,
        WelcomePageComponent,
        EditProfileComponent,
        LogoutComponent
        // ChangePasswordComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
