import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from '../core/base-service.service';
import { User } from '../../shared/view-models/User';
import { Urls } from '../../shared/common/Api-Urls';
import { environment } from '../../../../../src/environments/environment';

@Injectable()
export class AuthService extends BaseService {
  token: string;

  constructor(private router: Router) {
    super();
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

  login(username: string, password: string) {
    var body =
      'grant_type=password&username=' + username + '&password=' + password;
    return this.apiHelper.post<any, any>(Urls.loginUrl, body);
  }

  getFullName() {
    return JSON.parse(localStorage.getItem('currentUser')).user['EnglishName'];
  }

  getMobileNumber() {
    return JSON.parse(localStorage.getItem('currentUser')).user['MoblieNumber'];
  }

  getUsername() {
    return JSON.parse(localStorage.getItem('currentUser')).user['UserName'];
  }

  getLastActiveTime() {
    return JSON.parse(localStorage.getItem('lastActiveTime'));
  }

  getEmail() {
    return JSON.parse(localStorage.getItem('currentUser')).user['Email'];
  }

  istokenExpired(): boolean {
    let tokenExpireInDate = JSON.parse(localStorage.getItem('tokenExpireIn'));
    let tokenExpireIn = +Date.parse(tokenExpireInDate);
    let dateNow = +Date.now();
    return dateNow > tokenExpireIn;
  }

  logout() {
    localStorage.removeItem('tokenExpireIn');
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
  getRoles() {
    return JSON.parse(localStorage.getItem('currentUser')).user['Roles'];
  }

  isAuthunticated(): boolean {
    return this.getToken() != null && !this.istokenExpired();
  }

  isAdminAuthunticated(): boolean {
    return this.getRoles().some((x) => x === 'Admin');
  }

  isSuperAdminAuthenticated(): boolean {
    return this.getRoles().some((x) => x === 'SuperUser');
  }

  isUserAuthenticated(): boolean {
    return this.getRoles() == 'User';
  }

  isOperationAuthunticated(): boolean {
    return this.getRoles() == 'Operation';
  }
  isDeveloperAuthunticated(): boolean {
    return this.getRoles() == 'Developer';
  }

  setToken(user, username, token) {
    localStorage.setItem(
      'currentUser',
      JSON.stringify({ user: user, username: username, token: token })
    );
  }

  getToken() {
    if (localStorage.getItem('currentUser')) {
      return JSON.parse(localStorage.getItem('currentUser')).token;
    }
    return null;
  }

  getCreatedName(id: string) {
    return this.apiHelper.get<any>(Urls.getCreatedNameUrl + '/' + id);
  }
}
