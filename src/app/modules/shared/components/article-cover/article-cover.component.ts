import { AuthService } from '../../../../auth/auth.service';
import { ArticleService } from '../../service/article.service';
import { OverlayService } from '../../service/overlay.service';
import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../../boards/models/article.model';
import { EOverlayType } from '@utilities/enums/overlay.enum';

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

  public toggle() {
    event.stopPropagation();
    console.log('toggle')
    this.$overlay.toggle(EOverlayType.UnAuth);
  }

}
