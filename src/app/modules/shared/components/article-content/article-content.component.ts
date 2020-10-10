import { ArticleService } from '@services/article.service';
import { OverlayService } from './../../service/overlay.service';
import { Component, ElementRef, HostListener, NgZone, OnInit, ViewChild } from '@angular/core';
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
    private zone: NgZone
  ) { }


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



}
