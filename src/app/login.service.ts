import {Injectable} from '@angular/core';
import {Response} from "@angular/http";
import {Observable} from "rxjs";
import {ApiService} from "./services/api.service";

@Injectable()
export class LoginService {
    constructor(private api: ApiService) {
    }

    authenticate(email: string, password: string): Observable<Response> {
        var data = "email=" + email + "&password=" + password;

        var args = {
            data: data,
            method: 'POST',
            url: '/login'
        };

        return this
            .api.request(args);
    }

}
