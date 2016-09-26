import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-change-password',
    templateUrl: './change-password.component.html',
    styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
    public display: Object;
    public new_pass: string;
    public confirm_pass: string;
    public old_pass: string;

    constructor() {
        this.display = {
            old_pass: false,
            new_pass: false,
            confirm_pass: false
        };
    }

    ngOnInit() {
    }

    public toggle_display(field) {
        this.display[field] = !this.display[field];
    }

    public update() {
        var validate = this.validate_pass();
        if (!validate) {
            return;
        }
    }

    public validate_pass() {
        if (this.new_pass !== this.confirm_pass) {
            this.reset_all();
            return false;
        }

        return true;
    }

    public reset_all() {
        this.old_pass = '';
        this.new_pass = '';
        this.confirm_pass = '';
    }

}
