import {Component, OnInit} from '@angular/core';
import {ApiService} from "../services/api.service";

@Component({
    selector: 'app-list-class',
    templateUrl: './list-class.component.html',
    styleUrls: ['./list-class.component.scss'],
    providers: [ApiService]
})
export class ListClassComponent implements OnInit {
    public listClass: Object[];

    constructor(private api: ApiService) {
        this.getListClass();
    }

    ngOnInit() {
    }

    public getListClass() {
        var args = {
            method: 'GET',
            url: '/classes'
        };

        return this
            .api.requestAuth(args)
            .subscribe(
                response => {
                    var data = response.json();
                    this.listClass = data.data.classes;
                },
                error => {
                    console.log(error);
                }
            );
    }

}
