import { Injectable } from '@angular/core';
import { BOARD_INTERESTING } from '../utility/mock';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }
  public articles: any = BOARD_INTERESTING.article;

  public search(key) {
    this.articles = BOARD_INTERESTING.article.filter(content => content.title.includes(key));
  }

}
