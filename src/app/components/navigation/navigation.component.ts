import { Router } from '@angular/router';
import { BOARD_TYPE } from './../../utility/mock';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  public mock = BOARD_TYPE;

  ngOnInit(): void {
  }

  public toArticle(a) {
    this.router.navigate([a]);
  }

}
