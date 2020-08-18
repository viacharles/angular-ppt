import { AuthService } from './../../../service/auth.service';
import { ArticleService } from 'src/app/service/article.service';
import { OverlayService } from 'src/app/service/overlay.service';
import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/models/article.model';

@Component({
  selector: 'app-article-cover',
  templateUrl: './article-cover.component.html',
  styleUrls: ['./article-cover.component.scss']
})
export class ArticleCoverComponent implements OnInit {

  @Input() article: Article;

  constructor(
    public $overlay: OverlayService,
    public $article: ArticleService,
    public $auth: AuthService
  ) { }
  public isDialog: boolean;

  ngOnInit(): void {
  }

  public onLoginDialog() {
    this.$auth.isLogin ? this.isDialog = false : this.isDialog = true;
  }

}
