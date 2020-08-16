import { Hotboard } from './../../models/article.model';
import { ArticleService } from 'src/app/service/article.service';
import { Router } from '@angular/router';
import { AuthService } from './../../service/auth.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-foot-overlay',
  templateUrl: './foot-overlay.component.html',
  styleUrls: ['./foot-overlay.component.scss']
})
export class FootOverlayComponent implements OnInit {

  @Input() hotboard: Hotboard;

  constructor(
    public $auth: AuthService,
    public $article: ArticleService,
    public router: Router,
  ) { }

  ngOnInit(): void {
  }

  public toPage(page) {
    this.router.navigate([page]);
  }

}
