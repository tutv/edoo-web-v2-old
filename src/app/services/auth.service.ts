import {Injectable, Inject} from "@angular/core";
import {StorageService} from "./storage.service";

@Injectable()
export class AuthService {

    constructor(@Inject(StorageService) private storage: StorageService) {
    }

    public isAuthorized(): boolean {
        var token = this.storage.getToken();

        return Boolean(token);
    }
}