import {
  throwError as observableThrowError,
  Observable,
  BehaviorSubject,
} from 'rxjs';

import { switchMap, take, filter, catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpResponse,
  HttpErrorResponse,
  HttpEvent,
} from '@angular/common/http';
import { AlertService } from './alert.service';
import { AuthService } from './auth.service';
import { AlertMessageType } from '../view-models/enums';
import { LoadingService } from '../../shared/service/loadingService';

@Injectable()
export class RequestInterceptorService implements HttpInterceptor {
  isRefreshingToken: boolean = false;
  tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private totalRequests = 0;
  constructor(
    private authService: AuthService,
    private alertService: AlertService,
    private loadingService: LoadingService
  ) {}

  addToken(req: HttpRequest<any>, token: string): HttpRequest<any> {
    if (!req.url.includes('assets')) {
      //Only add token when call api not for every request like localization files
      if (this.authService.isAuthunticated()) {
        // req.clone({ setHeaders: { lastActiveTime: new Date().toString() } });
        // req.headers.append("lastActiveTime",new Date().toString() );
        //    return req.clone({ setHeaders: { Authorization: 'Bearer ' + token, lastActiveTime: this.authService.getLastActiveTime().toUTCString() } });
        //} else {
        //    return req.clone({ setHeaders: { Authorization: 'Bearer ' + token, lastActiveTime: new Date().toUTCString() } });
        //}
      }
      return req.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token,
          lastActiveTime: new Date().toUTCString(),
        },
      });
    }
    return req;
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.totalRequests++;
    this.loadingService.Start();

    return next.handle(this.addToken(req, this.authService.getToken())).pipe(
      tap((res) => {
        if (res instanceof HttpResponse) {
          console.log(res.headers.keys);
          localStorage.setItem(
            'lastActiveTime',
            res.headers.get('lastActiveTime')!
          );
          this.decreaseRequests();
        }
      }),
      catchError((error) => {
        this.decreaseRequests();
        if (error instanceof HttpErrorResponse) {
          switch ((<HttpErrorResponse>error).status) {
            case 403:
              this.authService.logout();
              break;
            //case 401:
            //    //return this.handle401Error(req, next);
            //    this.handle401Error(req, next);
            //    break;
          }
        } else {
          this.alertService.showAlertMessage(
            'error',
            error,
            AlertMessageType.Error
          );
        }
        return observableThrowError(error);
      })
    );
  }

  handle400Error(error: { status: number; error: { error: string } }) {
    if (
      error &&
      error.status === 400 &&
      error.error &&
      error.error.error === 'invalid_grant'
    ) {
      // If we get a 400 and the error message is 'invalid_grant', the token is no longer valid so logout.
      return this.logoutUser();
    }

    return observableThrowError(error);
  }

  handle401Error(req: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshingToken) {
      this.isRefreshingToken = true;

      // Reset here so that the following requests wait until the token
      // comes back from the refreshToken call.
      this.tokenSubject.next('');

      return this.authService
        .refreshToken()
        .switchMap((newToken: string): Observable<HttpEvent<any>> => {
          if (newToken) {
            this.tokenSubject.next(newToken);
            return next.handle(this.addToken(req, newToken));
          }
          // If we don't get a new token, we are in trouble so logout.
          return this.logoutUser();
        })
        .catch(() => {
          // If there is an exception calling 'refreshToken', bad news so logout.
          return this.logoutUser();
        })
        .finally(() => {
          this.isRefreshingToken = false;
        });
    } else {
      return this.tokenSubject.pipe(
        filter((token) => token != null),
        take(1),
        switchMap((token) => {
          return next.handle(this.addToken(req, token));
        })
      );
    }
  }

  logoutUser() {
    // Route to the login page (implementation up to you)

    return observableThrowError('');
  }

  decreaseRequests() {
    this.totalRequests--;
    if (this.totalRequests === 0) {
      this.loadingService.End();
    }
  }
}
