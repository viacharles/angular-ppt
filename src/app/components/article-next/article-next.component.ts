import { Component, OnInit } from '@angular/core';
import { OverlayService } from 'src/app/service/overlay.service';

@Component({
  selector: 'app-article-next',
  templateUrl: './article-next.component.html',
  styleUrls: ['./article-next.component.scss']
})
export class ArticleNextComponent implements OnInit {

  constructor(
    public $overlay: OverlayService,
  ) { }

  ngOnInit(): void {
  }

// public articleNextReverse {
//   if()
// }

}
