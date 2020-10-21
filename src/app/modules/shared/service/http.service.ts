import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    public http: HttpClient,
  ) { }

public domain = 'https://pttlite.ddns.net';

public get(url: string, option?) {
  return this.http.get(`${this.domain}/${url}`, {...option, ...{headers: this.getHeader() } }).pipe(
catchError(
  error => {
    console.log('http requsest error', error);
    return of([]);
  }
)
  );
}

public post(url: string, params?, option?) {
  return this.http.post(`${this.domain}/${url}`, params, {...option, ...{headers: this.getHeader() } }).pipe(
    catchError(
      error => {
console.log('http request error', error);
return of([]);
      }
    )
  );
}

public getHeader(): HttpHeaders {
return new HttpHeaders().set(
  'Authorization',
  `Bearer ${sessionStorage.getItem('access_token')}`
);
}

  // public domain = 'https://pttlite.ddns.net';

  // public get(url: string, options?) {
  //   return this.http.get(`${this.domain}/${url}`, { ...options, ...{ headers: this.getHeader() } }).pipe(
  //     catchError(
  //       error => {
  //         console.log('http request fail', error);
  //         return of([]);
  //       }
  //     )
  //   );
  // }

  // public post(url: string, params?, options?) {
  //   return this.http.post(`${this.domain}/${url}`, params, { ...options, ...{ headers: this.getHeader() } }).pipe(
  //     catchError(
  //       error => {
  //         console.log('http request fail', error);
  //         return of([]);
  //       }
  //     )
  //   );
  // }

  // private getHeader(): HttpHeaders {
  //   return new HttpHeaders().set(
  //     'Authorization',
  //     `Bearer ${sessionStorage.getItem('access_token')}`
  //   );
  // }
}