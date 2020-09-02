import { OverlayService } from './../../service/overlay.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-content',
  templateUrl: './article-content.component.html',
  styleUrls: ['./article-content.component.scss']
})
export class ArticleContentComponent implements OnInit {

  constructor(
    public $overlay: OverlayService
  ) { }

  ngOnInit(): void {
  }



  
}
