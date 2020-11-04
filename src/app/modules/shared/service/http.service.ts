import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { OverlayService } from './overlay.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    public http: HttpClient,
    private $overlay: OverlayService
  ) { }

  public domain = 'https://pttlite.ddns.net';

  public get(url: string, option?) {

    this.$overlay.startLoading();
    return this.http.get(`${this.domain}/${url}`, { ...option, ...{ headers: this.getHeader() } }).pipe(
      // tap(_ => this.$overlay.finishLoading()),
      catchError(
        error => {
          console.log('http requsest error', error);
          return of([]);
        }
      )
    );
  }

  public post(url: string, params?, option?) {
    this.$overlay.startLoading();
    return this.http.post(`${this.domain}/${url}`, params, { ...option, ...{ headers: this.getHeader() } }).pipe(
      tap(_ => this.$overlay.finishLoading()),
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

}
