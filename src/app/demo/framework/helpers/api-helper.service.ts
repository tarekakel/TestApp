import { Observable, throwError as observableThrowError } from 'rxjs';

import { map, finalize, catchError } from 'rxjs/operators';
import { OnInit, Injectable } from '@angular/core';
import {
  HttpClient,
  HttpResponse,
  HttpErrorResponse,
  HttpParams,
  HttpHeaders,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiHelperService {
  //Members

  private URL = environment.serverUrl;

  //'http://localhost/Raqeeb.Apis/api'; environment.serverUrl;

  //Methods
  //Constructor
  constructor(private _http: HttpClient) {}

  //HTTP Post Method
  post<TData, TResponse>(
    endpointUrl: string,
    data: TData,
    params = new HttpParams()
  ): Observable<TResponse> {
    let headers = new HttpHeaders();

    //Using the HttpClient instance _http, to call the API endpoint.
    return this._http
      .post(this.URL + endpointUrl, data, {
        headers: headers,
        params: params,
      })
      .pipe(
        map<any, any>(
          (response: TResponse): TResponse => this.successOperation(response)
        ),
        catchError((error: HttpErrorResponse) => {
          return this.errorOperation(error);
        }),
        finalize(() => {
          this.finallyOperation();
        })
      );
  } //End [post]

  //HTTP Get Method
  get<TResponse>(
    endpointUrl: string,
    params = new HttpParams()
  ): Observable<TResponse> {
    let headers = new HttpHeaders();
    //Using the HttpClient instance _http, to call the API endpoint.
    return this._http
      .get(this.URL + endpointUrl, { params: params, headers: headers })
      .pipe(
        map<any, any>((response: TResponse) => {
          return this.successOperation(response);
        }),
        catchError((error: HttpErrorResponse) => {
          return this.errorOperation(error);
        }),
        finalize(() => {
          this.finallyOperation();
        })
      );
  } //End [get]

  getGeneral<TResponse>(
    endpointUrl: string,
    params = new HttpParams()
  ): Observable<TResponse> {
    let headers = new HttpHeaders();

    //Using the HttpClient instance _http, to call the API endpoint.
    return this._http
      .get(this.URL + endpointUrl, { params: params, headers: headers })
      .pipe(
        map<any, any>((response: TResponse) => this.successOperation(response)),
        catchError((error: HttpErrorResponse) => {
          return this.errorOperation(error);
        }),
        finalize(() => {
          this.finallyOperation();
        })
      );
  } //End [get]

  //HTTP Put Method
  put<TData, TResponse>(
    endpointUrl: string,
    data: TData,
    params = new HttpParams()
  ): Observable<TResponse> {
    let headers = new HttpHeaders();

    return this._http
      .put(this.URL + endpointUrl, data, { params: params, headers: headers })
      .pipe(
        map<any, any>((response: TResponse) => this.successOperation(response)),
        catchError((error: HttpErrorResponse) => {
          return this.errorOperation(error);
        }),
        finalize(() => {
          this.finallyOperation();
        })
      );
  } //End [post]

  //successOperation Method
  private successOperation<TResponse>(result: TResponse) {
    return result;
  } //End [successOperation]

  //errorOperation Method
  private errorOperation<TResponse>(error: HttpErrorResponse) {
    return observableThrowError(error);
  } //End [errorOperation]

  //finallyOperation Method
  private finallyOperation() {} //End [finallyOperation]
}
