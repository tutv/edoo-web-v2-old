import {Component, OnInit, Output, EventEmitter, Input} from "@angular/core";
import {LoginService} from "../login.service";
import {Router} from "@angular/router";
import {ApiService} from "../services/api.service";
import {StorageService} from "../services/storage.service";
import {AuthService} from "../services/auth.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [LoginService, ApiService, StorageService, AuthService]
})
export class LoginComponent implements OnInit {
    email: string = '';
    password: string = '';
    errors: string[] = [];
    @Output('login') loginChange = new EventEmitter();

    constructor(private loginService: LoginService,
                private router: Router,
                private storage: StorageService,
                private auth: AuthService) {
        if (this.auth.isAuthorized()) {
            this.router.navigate(['/class']);
        }
    }

    ngOnInit() {
    }

    public login(): void {
        this.loginService.auth(this.email, this.password)
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
                    this.loginChange.emit(user);
                },
                error => {
                    var body = error._body;
                    var data = JSON.parse(body);
                    this.errors = [data.message];
                }
            );
    }

}
