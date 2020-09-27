import { AuthService } from '@auth/auth.service';
import { Hotboard } from '@boards/models/article.model';
import { ArticleService } from '@services/article.service';
import { Router } from '@angular/router';

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
