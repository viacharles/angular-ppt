import { ILogin } from './../../../../utilities/interfaces/interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(
    private router: Router,
    public $auth: AuthService,
  ) { }
  public passwordWarn = '';
  public emailWarn = '';
  public isValidPassword = false;
  public isValidEmail = false;
  public isDisplayPassword = false;
  public params: ILogin = {
    email: '',
    password: '',
  };


  ngOnInit(): void {
  }



  public passwordValidation(input: string) {
    console.log(input);
    this.passwordWarn = input.length === 0 ? '此欄位為必填' : input.length < 6 ? '長度至少為 6 位。' : '';
    this.isValidPassword = !this.passwordWarn;
  }

  public emailValidation(input: string) {
    this.emailWarn = input.length === 0 ? '此欄位為必填' : input.includes('@') ? '' : '不符合信箱格式。';
    this.isValidEmail = !this.emailWarn;
  }


  public toPage(a) {
    this.router.navigate([a]);
  }
}
