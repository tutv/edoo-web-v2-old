import {Component, OnInit} from '@angular/core';
import {LoginService} from "../login.service";
import {Router} from "@angular/router";
import {ApiService} from "../services/api.service";
import {StorageService} from "../services/storage.service";
import {CookieService} from 'angular2-cookie/services/cookies.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [LoginService, ApiService, StorageService, CookieService]
})
export class LoginComponent implements OnInit {
    email: string = '';
    password: string = '';
    errors: string[] = [];

    constructor(private loginService: LoginService,
                private router: Router,
                private storage: StorageService) {
    }

    ngOnInit() {
    }

    public login(): void {
        this.loginService.authenticate(this.email, this.password)
            .subscribe(
                response => {
                    this.errors = [];
                    this.email = '';
                    this.password = '';

                    let data = response.json();
                    let token = data.data.token;
                    this.storage.setToken(token);

                    let user = data.data.user;
                    this.storage.setUserData(user);

                    this.router.navigate(['/class']);
                },
                error => {
                    var body = error._body;
                    var data = JSON.parse(body);
                    this.errors = [data.message];
                }
            );
    }

}
