import {Component, OnInit} from '@angular/core';
import {LoginService} from "../login.service";
import {Router} from "@angular/router";
import {ApiService} from "../services/api.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [LoginService, ApiService]
})
export class LoginComponent implements OnInit {
    email: string = '';
    password: string = '';
    errors: string[] = [];

    constructor(private loginService: LoginService,
                private router: Router) {
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
                    alert(data.message);
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
