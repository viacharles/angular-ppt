import { AuthService } from './../../service/auth.service';
import { ArticleService } from 'src/app/service/article.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(
    private router: Router,
    public $article: ArticleService,
    public $auth: AuthService,
  ) { }

  ngOnInit(): void {
  }

  public toArticle(a) {
    this.router.navigate([a]);
  }

}
