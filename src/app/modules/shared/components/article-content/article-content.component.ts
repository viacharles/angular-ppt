import { HttpClient } from '@angular/common/http';
import { OverlayService } from './../../service/overlay.service';
import { Component, ElementRef, HostListener, NgZone, OnInit, ViewChild } from '@angular/core';
import { ArticleContentService } from '../../service/article-content.service';

@Component({
  selector: 'app-article-content',
  templateUrl: './article-content.component.html',
  styleUrls: ['./article-content.component.scss']
})
export class ArticleContentComponent implements OnInit {

  @ViewChild('tInfo') info: ElementRef;


  constructor(
    public http: HttpClient,
    public $overlay: OverlayService,
    public $articleContent: ArticleContentService,
    private zone: NgZone
  ) { }


  ngOnInit(): void {
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
