import {Component} from '@angular/core';
import {StorageService} from "./services/storage.service";
import {CookieService} from "angular2-cookie/services/cookies.service";
import {AuthService} from "./services/auth.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [StorageService, CookieService, AuthService]
})
export class AppComponent {
    title = 'app works!';
}