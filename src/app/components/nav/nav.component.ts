import { BOARD_INTERESTING } from './../../utility/mock';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/service/article.service';
import { NONE_TYPE } from '@angular/compiler';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(
    private router: Router,
    public $article: ArticleService
  ) { }

  public test = false;
  public menu = false;

  public hotKey;

  ngOnInit(): void {
  }

  public openMenu() {
    this.menu = !this.menu;
  }

  public toPage(path) {
    this.test = true;
    this.router.navigate([path]);
  }

  public onclick() {
    this.hotKey = this.hotKey === undefined ? '果敢不同很可以' : this.hotKey;
  }
}


