import { AuthService } from '@auth/auth.service';
import { Article, ArticlePage } from './../../../boards/models/article.model';
import { ArticleService } from '@services/article.service';
import { OverlayService } from './../../service/overlay.service';
import { Component, ElementRef, HostListener, Input, NgZone, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-article-content',
  templateUrl: './article-content.component.html',
  styleUrls: ['./article-content.component.scss']
})
export class ArticleContentComponent implements OnInit {

  @ViewChild('tInfo') info: ElementRef;

  constructor(
    public $overlay: OverlayService,
    public $article: ArticleService,
    private $auth: AuthService,
    private zone: NgZone,
    private sanitizer: DomSanitizer
  ) { }

  get html() {
    return this.sanitizer.bypassSecurityTrustHtml(this.$article.articlePage.body);
  }

  public commentLength = this.$article.articlePage.discussions.length;


  ngOnInit(): void {
    console.log(this.$article.articlePage);
  }


  public onScroll(target) {
    this.zone.runOutsideAngular(
      _ => {
        const RECT = this.info.nativeElement.getBoundingClientRect();
        if (RECT.top < 0) {
          console.log('arrived', document.body.clientHeight);
        }
      }
    );
  }

  public favorite(event: MouseEvent) {
    if (this.$auth.isLogin) {
      this.$article.favoriteArtice(this.$article.articlePage.boardName, this.$article.articlePage.articleNumber, true);
    }
  }


}
