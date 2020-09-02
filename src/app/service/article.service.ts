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


  public search(key) {
    this.articles = this.articles.filter(content => content.title.includes(key));
  }

  public setBoardFilter(board: string) {
    this.board = board;
  }

  public getArticles() {
    const articleAfterFilter = this.board ? this.articles.filter(article => article.board === this.board) : this.articles;
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
    this.http.get('https://pttlite.ddns.net/index').subscribe(
      (res: any) => {
        console.log(res);
        this.articles = res.articles.map(
          article => new Article(
            article.article_url,
            article.author,
            article.ip_location,
            article.board_name,
            article.body_preview,
            article.create_time,
            article.like_count,
            article.neutral_count,
            article.title,
            article.dislike_count,
            article.disscussion_count,
          )
        );
        this.hotboards = res.top_8_like_count_boards.map(
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
