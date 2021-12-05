import { ForgetPasswordService } from './../../service/ForgetPasswordService';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../framework/helpers/auth.service';
import { BaseComponent } from '../../../framework/core/base-component';
import { AlertMessageType } from '../../../framework/view-models/enums';
import { User } from '../../view-models/User';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent extends BaseComponent implements OnInit {
  errorMessage: boolean = false;
  message: string = '';
  user: string = '';
  token: string = '';
  expires: string = '';
  username: string = '';
  password: string = '';
  display: boolean = false;
  email: string; //Forget Email
  userExist: boolean = false;
  objUser: User;
  isEmailChecked: boolean = false;
  isLinkSent: boolean = false;

  backgroundList: Array<any>;
  backgroundIndex: any;
  background: any;
  //ForgetPasswordService: any;

  constructor(
    private authService: AuthService,
    private forgetpasswordService: ForgetPasswordService,
    public router: Router,
    private http: HttpClient
  ) {
    super();
  }

  ngOnInit() {
    if (this.authService.isAuthunticated()) {
      this.router.navigate(['/dashboard']);
    } else {
      this.authService.logout();
    }

    this.objUser = new User();

    this.backgroundList = [
      '5f4b22f2b238b.jpg',
      'AR-201129602.jpg',
      'how-it-works-1.jpg',
      'schoolbus4.jpg',
      'school-bus.png',
    ];
    this.backgroundIndex = Math.floor(
      Math.random() * this.backgroundList.length
    );
    this.backgroundChange(this.backgroundList);
  }

  backgroundChange(x) {
    if (this.backgroundIndex > 6) {
      this.backgroundIndex = 0;
    }

    this.background =
      'url(./assets/images/login/' + x[this.backgroundIndex] + ')';
    this.backgroundIndex++;
    //setTimeout(() => this.backgroundChange(this.backgroundList), 10000);
    return this.background;
  }

  saveLangHeader(lang) {}

  login(f: NgForm) {
    this.authService.login(this.username, this.password).subscribe(
      (res) => {
        var user = JSON.parse(res.user.replace(/\\/g, ''));
        if (!user.IsActive) {
          this.router.navigate(['/login']);
          return false;
        }
        this.user = user;
        this.token = res.access_token;
        this.authService.setToken(this.user, this.username, this.token);
        this.expires = res['.expires'];
        localStorage.setItem('tokenExpireIn', JSON.stringify(this.expires));
        if (
          this.authService.isAuthunticated() &&
          this.authService.isAdminAuthunticated()
        ) {
          this.router.navigate(['/newdashboard']);
        } else if (
          this.authService.isAuthunticated() &&
          this.authService.isSuperAdminAuthenticated()
        ) {
          this.router.navigate(['/account']);
        } else if (
          this.authService.isAuthunticated() &&
          this.authService.isUserAuthenticated()
        ) {
          this.router.navigate(['/newdashboard']);
        } else {
          this.router.navigate(['/newdashboard']);
        }
      },
      (error) => {
        this.router.navigate(['/login']);
        this.errorMessage = true;
      }
    );
  }

  showDialog() {
    this.display = true;
    this.objUser = new User();
  }

  closeDialog() {
    this.display = false;
    this.router.navigate(['/login']);
  }

  checkUserExist() {
    this.forgetpasswordService.checkUserExist(this.objUser).subscribe((res) => {
      if (res.email) {
        this.userExist = true;
        this.isEmailChecked = true;
      } else {
        this.userExist = false;
        this.isEmailChecked = false;
      }
    });
  }

  sendConfirmationEmail() {
    this.forgetpasswordService
      .sendConfirmationEmail(this.objUser)
      .subscribe((res) => {
        this.router.navigate(['/login']);
        this.isLinkSent = true;
      });
  }
}
