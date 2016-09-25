import {Injectable} from '@angular/core';
import {Http, Headers, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class ApiService {
    private BASE_URL = 'http://api-v2.uetf.me';

    constructor(private http: Http) {
    }

    public request(args): Observable<Response> {
        var url_api = this.BASE_URL + args.url;

        var headers = new Headers();
        headers.set('Content-Type', 'application/x-www-form-urlencoded');

        return this
            .http
            .request(url_api, {
                method: args.method,
                headers: headers,
                body: args.data
            });
    }

    public requestAuth(args): Observable<Response> {
        var url_api = this.BASE_URL + args.url;

        var headers = new Headers();
        headers.set('Content-Type', 'application/x-www-form-urlencoded');
        headers.set('Authorization', 'afdsfsdfds');

        return this
            .http
            .request(url_api, {
                method: args.method,
                headers: headers,
                body: args.data
            });
    }
}
