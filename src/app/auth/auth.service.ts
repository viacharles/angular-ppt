import { HttpService } from './../modules/shared/service/http.service';
import { ILogin } from '../utilities/interfaces/interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private $http: HttpService,
    private http: HttpClient
  ) {
    if (this.isLogin) {
      this.refreshToken();
    }
  }

  get isLogin() {
    return !!sessionStorage.getItem('access_token');
  }

  private tokenLifeTime = 800;

  public login(params: ILogin) {
    this.getToken$(params).subscribe(
      (token: any) => this.onTokenRecived(token.access_token, token.refresh_token)
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

  private onTokenRecived(accessToken: string, refreshToken: string) {
    sessionStorage.setItem('access_token', accessToken);
    sessionStorage.setItem('refresh_token', refreshToken);
    this.watchTokenLife(this.tokenLifeTime);
  }

  private refreshToken() {
    this.http.post(`${this.$http.domain}/refresh_toekn`, {}, {
      headers: new HttpHeaders().set(
        'Authorization',
        `Bearer ${sessionStorage.getItem('refresh_token')}`
      )
    }).subscribe(
      (res: any) => {
        sessionStorage.setItem('access_token', res.access_token);
        this.watchTokenLife(this.tokenLifeTime);
      }
    );
  }

  private watchTokenLife(life: number) {
    setTimeout(
      _ => this.refreshToken(),
      life * 1000
    );
  }

}
