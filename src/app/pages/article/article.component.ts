import { OverlayService } from './../../service/overlay.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/service/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  constructor(
    private router: Router,
    public $article: ArticleService,
    public $overlay: OverlayService
  ) { }


  ngOnInit(): void {
  }

  public toContent(content) {
    this.router.navigate([content])
  }
}
