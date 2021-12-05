import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { User } from '../_models';
import { BaseService } from '../framework/core/base-service.service';
import { Urls } from '../shared/common/Api-Urls';

@Injectable({ providedIn: 'root' })
export class AuthenticationService extends BaseService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    super();
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser')!!)
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser')!!)
    );
    this.currentUser = this.currentUserSubject.asObservable();
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    var body =
      'grant_type=password&username=' + username + '&password=' + password;
    return this.apiHelper.post<any, any>('/authorization/login', body);
    // return this.http.post<any>(`${environment.apiUrl}/authorization/login`, body)
    //     .pipe(map(user => {
    //         // store user details and jwt token in local storage to keep user logged in between page refreshes
    //         localStorage.setItem('currentUser', JSON.stringify(user));
    //         this.currentUserSubject.next(user);
    //         return user;
    //     }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(new User());
  }
  getAuthToken() {
    return 'token';
  }

  refreshToken() {
    return null;
  }

  getBaseUrl(): string {
    return environment.serverUrl;
  }

  getFullName() {
    return JSON.parse(localStorage.getItem('currentUser')!).user['EnglishName'];
  }

  getMobileNumber() {
    return JSON.parse(localStorage.getItem('currentUser')!).user[
      'MoblieNumber'
    ];
  }

  getUsername() {
    return JSON.parse(localStorage.getItem('currentUser')!).user['UserName'];
  }

  getLastActiveTime() {
    return JSON.parse(localStorage.getItem('lastActiveTime')!);
  }

  getEmail() {
    return JSON.parse(localStorage.getItem('currentUser')!).user['Email'];
  }

  istokenExpired(): boolean {
    let tokenExpireInDate = JSON.parse(localStorage.getItem('tokenExpireIn')!);
    let tokenExpireIn = +Date.parse(tokenExpireInDate);
    let dateNow = +Date.now();
    return dateNow > tokenExpireIn;
  }

  getRoles() {
    // console.log(JSON.parse(  localStorage.getItem('currentUser')!).user["Roles"]);
    return JSON.parse(localStorage.getItem('currentUser')!).user['Roles'];
  }

  isAuthunticated(): boolean {
    return this.getToken() != null && !this.istokenExpired();
  }

  isAdminAuthunticated(): boolean {
    return this.getRoles().some((x: any) => x === 'Admin');
  }

  isSuperAdminAuthenticated(): boolean {
    return this.getRoles().some((x: any) => x === 'SuperUser');
  }

  isUserAuthenticated(): boolean {
    return this.getRoles().some((x: any) => x === 'User');
    // return (this.getRoles() == 'User');
  }

  isOperationAuthunticated(): boolean {
    return this.getRoles() == 'Operation';
  }
  isDeveloperAuthunticated(): boolean {
    return this.getRoles() == 'Developer';
  }

  setToken(user: string, username: string, token: string) {
    localStorage.setItem(
      'currentUser',
      JSON.stringify({ user: user, username: username, token: token })
    );
  }

  getToken() {
    if (localStorage.getItem('currentUser')!) {
      return JSON.parse(localStorage.getItem('currentUser')!).token;
    }
    return null;
  }

  getCreatedName(id: string) {
    return this.apiHelper.get<any>(Urls.getCreatedNameUrl + '/' + id);
  }
}
