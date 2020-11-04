import { AuthService } from '../../../../auth/auth.service';
import { ArticleService } from './../../service/article.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(
    private router: Router,
    public $article: ArticleService,
    public $auth: AuthService,
  ) { }

  public menu = false;
  public hotKey;

  ngOnInit(): void {
  }

  public openMenu() {
    this.menu = !this.menu;
  }

  public toPage(path) {
    console.log('toLanding')
    this.router.navigate([path]);
  }

  public onclick() {
    this.hotKey = this.hotKey === undefined ? '果敢不同很可以' : this.hotKey;
  }
}


