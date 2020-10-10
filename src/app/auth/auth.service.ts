import { HttpService } from './../modules/shared/service/http.service';
import { ILogin } from '../utilities/interfaces/interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private $http: HttpService,
    private router: Router
  ) { }

  get isLogin() {
    return !!sessionStorage.getItem('token');
  }
  public isDialog = false;

  public login(params: ILogin) {
    this.getToken$(params).subscribe(
      (token: any) => this.onTokenRecived(token.access_token)
    );
  }

  public logout() {
    sessionStorage.clear();
  }

  private getToken$(params: ILogin) {
    return this.$http.post('login', {
      email: params.email,
      password: params.password,
    });
  }

  private onTokenRecived(token: string) {
    const TOKEN_LIFE_TIME = 300;
    sessionStorage.setItem('token', token);
    setTimeout(
      _ => this.refreshToken(),
      TOKEN_LIFE_TIME * 1000
    );
  }

  private refreshToken() {
    console.log('token will outdated');
  }

  public onLoginDialog(e: Event) {
    e.stopPropagation();
    this.isLogin ? this.isDialog = false : this.isDialog = true;
  }


}
