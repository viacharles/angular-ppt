import { AuthService } from '@auth/auth.service';
import { ArticleService } from '@services/article.service';

import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-overlay',
  templateUrl: './login-overlay.component.html',
  styleUrls: ['./login-overlay.component.scss']
})
export class LoginOverlayComponent implements OnInit {

  constructor(
    public router: Router,
    public $article: ArticleService,
    public $auth: AuthService,
  ) { }

  ngOnInit(): void {
  }

  public toPage(page) {
    this.router.navigate([page]);
    this.$auth.isDialog = false;
  }


}
