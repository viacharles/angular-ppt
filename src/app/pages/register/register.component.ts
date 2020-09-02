import { ILogin } from './../../utility/interface';
import { AuthService } from './../../service/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private router: Router,
    public $auth: AuthService,
  ) { }

  public passwordWarn = '';
  public emailWarn = '';
  public inputType = false;
  public params: ILogin = {
    email: '',
    password: '',
  };


  ngOnInit(): void {
  }



  public passwordValidation(input: string) {
    console.log(input);
this.passwordWarn = input.length === 0 ? '此欄位為必填' : input.length < 6 ? '長度至少為 6 位。' : '';
  }

  public emailValidation(input: string) {
  this.emailWarn = input.length === 0 ? '此欄位為必填' : input.includes('@') ? '' : '不符合信箱格式。' ;
  }


  public toPage(a) {
    this.router.navigate([a]);
  }
}
