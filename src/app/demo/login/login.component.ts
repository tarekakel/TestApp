import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../_services';
import { User } from '../_models';
import { BehaviorSubject } from 'rxjs-compat';

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
  private currentUserSubject: BehaviorSubject<User>;
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

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

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    // this.currentUser = this.currentUserSubject.asObservable();
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService
      .login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        (res) => {
          var user = JSON.parse(res.user.replace(/\\/g, ''));
          if (!user.IsActive) {
            //   this.alertService.showAlertMessage(this.translationService.translate('Messages.ErrorTitle'),
            //   this.translationService.translate('Login.UserInactive'), AlertMessageType.Error);
            this.router.navigate(['/login']);
            return false;
          }
          console.log(user);
          this.user = user;
          this.token = res.access_token;
          this.username = user.UserName;
          this.authenticationService.setToken(
            this.user,
            this.username,
            this.token
          );
          this.expires = res['.expires'];
          localStorage.setItem('tokenExpireIn', JSON.stringify(this.expires));
          if (
            this.authenticationService.isAuthunticated() &&
            this.authenticationService.isAdminAuthunticated()
          ) {
            this.route.snapshot.queryParams['returnUrl'] || '/';
            this.router.navigate(['/default']);
          } else if (
            this.authenticationService.isAuthunticated() &&
            this.authenticationService.isSuperAdminAuthenticated()
          ) {
            this.router.navigate([this.returnUrl]);
          } else if (
            this.authenticationService.isAuthunticated() &&
            this.authenticationService.isUserAuthenticated()
          ) {
            this.route.snapshot.queryParams['returnUrl'] || '/';
            this.router.navigate(['/dashboard/project']);
          } else {
            this.router.navigate([this.returnUrl]);
          }
        },
        (error) => {
          this.router.navigate(['/login']);
          this.errorMessage = true;

          // this.alertService.showAlertMessage(this.translationService.translate('Messages.ErrorTitle'),
          //     this.translationService.translate('Messages.InvalidUsernameOrPassword'), AlertMessageType.Error);
        }
      );

    // data => {
    //     this.router.navigate([this.returnUrl]);
    // },
    // error => {
    //     this.error = error;
    //     this.loading = false;
    // });
  }
}
