import { ILogin } from './../utility/interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) { }

  public isLogin = false;
  public isDialog = false;
  public isFoot = true;

  public login(params: ILogin) {
    this.getToken$(params).subscribe(
      (token: any) => this.onTokenRecived(token.access_token)
    );
  }

  private getToken$(params: ILogin) {
    return this.http.post('https://pttlite.ddns.net/login', {
      email: params.email,
      password: params.password,
    }).pipe(
      catchError(error => {
        this.onUserIllegal(error);
        throw error;
      })
    );
  }

  private onTokenRecived(token: string) {
    const TOKEN_LIFE_TIME = 300;
    sessionStorage.setItem('token', token);
    setTimeout(
      _ => this.refreshToken(),
      TOKEN_LIFE_TIME * 1000
    );
    this.isLogin = true;
  }

  private onUserIllegal(error) {
    console.log(error.message);
  }

  private refreshToken() {
    console.log('token will outdated');
  }

  public onLoginDialog() {
    event.stopPropagation();
    this.isLogin ? this.isDialog = false : this.isDialog = true;
  }

  public onFootOverlay() {
    this.isFoot = false;
  }

}
