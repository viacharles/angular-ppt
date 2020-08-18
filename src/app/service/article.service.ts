import { Article, Hotboard } from './../models/article.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
    private http: HttpClient,
  ) {
    this.setArticles();
  }
  private articles: Article[] = [];
  public hotboards: Hotboard[];
  public board: string;
  // public search(key) {
  //   this.articles = BOARD_INTERESTING.article.filter(content => content.title.includes(key));
  // }

  public setBoardFilter(board: string) {
    this.board = board;
  }

  public getArticles() {
    const articleAfterFilter = this.board ? this.articles.filter(article => article.board === this.board) : this.articles;
    console.log('board', this.board )
    return this.chunkArticles(articleAfterFilter);
  }



  private chunkArticles(articles: Article[], per = 20): Article[][] {
    const articlesAfterChunk = [];
    const page = articles.length % per === 0 ? Math.floor(articles.length / per) : Math.floor(articles.length / per) + 1;
    for (let i = 0; i < page; i = i + 1) {
      articlesAfterChunk.push(articles.slice(i * per, i * per + per));
    }
    return articlesAfterChunk;
  }




  private setArticles() {
    this.http.get('https://pttlite.ddns.net').subscribe(
      (res: any) => {
        console.log(res);
        this.articles = res.article.map(
          article => new Article(
            article.article_url,
            article.author,
            article.author_ip,
            article.board_name,
            article.body,
            article.create_time,
            article.like,
            article.respone,
            article.title,
            article.unlike,
          )
        );
        this.hotboards = res.hotboard.map(
          hotboard => new Hotboard(
            hotboard.board_class,
            hotboard.board_name,
            hotboard.board_url,
            hotboard.dissussCount,
          )
        );
      }
    );
  }
}
