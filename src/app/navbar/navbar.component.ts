import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {StorageService} from "../services/storage.service";
// import {AuthService} from "../services/auth.service";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    providers: [AuthService]
})
export class NavbarComponent implements OnInit {
    public user: Object = {};

    constructor(private auth: AuthService,
                public storage: StorageService) {
        this.updateUserData();
    }

    ngOnInit() {
    }

    public updateUserData() {
        this.user = this.storage.getUserData()
    }

    public isLoggedIn(): boolean {
        return this.auth.isAuthorized();
    }
}
