import { Article } from '../../models/article.model';
import { OverlayService } from '../../../shared/service/overlay.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ArticleService } from '../../../shared/service/article.service';
import { ArticleContentService } from '../../../shared/service/article-content.service';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent implements OnInit {

  @ViewChild('tmenu') menu: ElementRef;
  @ViewChild('tarticle') article: ElementRef;

  constructor(
    public router: Router,
    private $overlay: OverlayService,
    public $article: ArticleService,
    private $articleContent: ArticleContentService,
  ) { }
  public isMenu = false;
  public isIcon = true;
  public filterText = '熱門';
  public currentPage = 1;
  private e = this.detectWindowClick.bind(this);

  ngOnInit(): void {
  }
  public onScroll(event) {
    if (event.scrollHeight - event.scrollTop - event.clientHeight <= 755) {
      if (this.currentPage < this.$article.getArticles().length) {
        this.currentPage = this.currentPage + 1;
      }
    }
  }

  public getDisplayArticles(): Article[] {
    const displayArticles = this.$article.getArticles().slice(0, this.currentPage);
    return displayArticles.reduce(
      (after, next) => after.concat(next)
      , []
    );
  }

  private detectWindowClick(parms) {
    if (!this.menu.nativeElement.contains(parms.target)) {
      this.isMenu = false;
      document.removeEventListener('click', this.e);
    }
  }


  public openMenu() {
    event.stopPropagation();
    this.isMenu = true;
    if (this.isMenu) {
      document.addEventListener('click', this.e);
    }
  }

  public closeMenu() {
    event.stopPropagation();
    this.isMenu = false;
    if (!this.isMenu) {
      document.removeEventListener('click', this.e);
    }
  }

  public isHot() {
    this.isIcon = true;
    this.filterText = '熱門';
  }

  public isNew() {
    this.isIcon = false;
    this.filterText = '最新';
  }

  public toContent(content) {
    this.router.navigate([content]);
  }

}
