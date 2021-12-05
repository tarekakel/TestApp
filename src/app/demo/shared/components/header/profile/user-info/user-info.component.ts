import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../../../framework/helpers/auth.service";
import { BaseComponent } from '../../../../../framework/core/base-component';
import { User } from "../../../../view-models/User";

@Component({
    selector: 'app-user-info',
    templateUrl: './user-info.component.html',
    styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent extends BaseComponent implements OnInit {

    loggedInUser: string = "";
    user: User;
    user_thumbnail: string = 'assets/images/user.png';

    constructor(private authService: AuthService) {

        super();
    }

    ngOnInit() {

        this.loggedInUser = JSON.parse(localStorage.getItem('currentUser')).user;
        this.user = new User();
        this.user.fullName = JSON.parse(localStorage.getItem('currentUser')).user.EnglishName;
        this.user.email = JSON.parse(localStorage.getItem('currentUser')).user.Email;
        this.user.mobileNumber = JSON.parse(localStorage.getItem('currentUser')).user.MobileNumber;


    }

}
