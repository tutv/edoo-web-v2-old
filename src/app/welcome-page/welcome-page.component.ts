import {Component, OnInit} from '@angular/core';
import {ApiService} from "../services/api.service";
import {Http} from "@angular/http";

@Component({
    selector: 'app-welcome-page',
    templateUrl: './welcome-page.component.html',
    styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
