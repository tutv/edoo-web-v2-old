import {Component, OnInit} from '@angular/core';
import {ApiService} from "../services/api.service";
import {Router} from "@angular/router";
import {StorageService} from "../services/storage.service";

@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html',
    styleUrls: ['./logout.component.css'],
    providers: [ApiService, StorageService]
})
export class LogoutComponent implements OnInit {

    constructor(private api: ApiService,
                private storage: StorageService,
                private router: Router) {
        this.logout();
    }

    ngOnInit() {
    }

    public logout() {
        var args = {
            method: 'GET',
            url: '/logout',
        };

        this.api.requestAuth(args)
            .subscribe(
                response => {
                    this.storage.removeAll();
                    this.router.navigate(['/welcome']);
                },
                error => {
                    this.storage.removeAll();
                    console.log(error);
                }
            );
    }

}
