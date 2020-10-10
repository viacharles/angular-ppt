import { OverlayService } from 'src/app/modules/shared/service/overlay.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-overlay',
  templateUrl: './article-overlay.component.html',
  styleUrls: ['./article-overlay.component.scss']
})
export class ArticleOverlayComponent implements OnInit {

  constructor(
    public $overlay: OverlayService,
  ) { }

  ngOnInit(): void {
  }

}
