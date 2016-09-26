import {Component, OnInit} from '@angular/core';
import {ApiService} from "../services/api.service";
import {StorageService} from "../services/storage.service";

@Component({
    selector: 'app-edit-profile',
    templateUrl: './edit-profile.component.html',
    styleUrls: ['./edit-profile.component.scss'],
    providers: [ApiService, StorageService]
})
export class EditProfileComponent implements OnInit {
    public account: Object = {};
    public form: Object = {};

    constructor(private storage: StorageService, private api: ApiService) {
        this.updateUserData();
        this.getProfile();
    }

    ngOnInit() {
    }

    public updateUserData() {
        this.account = this.storage.getUserData();
    }

    public getProfile() {
        var args = {
            url: '/profile',
            method: 'GET'
        };
        this.api.requestAuth(args)
            .subscribe(
                response => {
                    var data = response.json();

                    this.account = data.data;
                },
                error => {
                    console.log(error);
                }
            );
    }

    public openEdit(field) {
        this.form[field] = true;
    }

    public closeEdit(field) {
        this.form[field] = false;
    }

    public update(field) {
        var value = this.account[field];
        var data = field + "=" + value;

        var args = {
            url: '/profile',
            method: 'POST',
            data: data
        };
        this.api.requestAuth(args)
            .subscribe(
                response => {
                    this.closeEdit(field);
                },
                error => {
                    console.log(error);
                }
            );
    }

}
