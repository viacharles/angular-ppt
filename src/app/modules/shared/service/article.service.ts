import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IMyCenter } from './../../../utilities/interfaces/interface';
import { AuthService } from '@auth/auth.service';
import { ArticlePage, MemberCenter } from './../../boards/models/article.model';
import { Article, Hotboard } from '../../boards/models/article.model';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { OverlayService } from './overlay.service';
import { EOverlayType } from '@utilities/enums/overlay.enum';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
    private http: HttpClient,
    private $http: HttpService,
    private $overlay: OverlayService,
    private $auth: AuthService,
  ) {
    this.setArticles();
  }
  private articles: Article[] = [];
  public hotboards: Hotboard[];
  public board: string;
  public articlePage: ArticlePage;
  public memberCenter: MemberCenter;



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

  public setArticleContent(num: string, board: string) {
    this.$overlay.startLoading();
    this.$http.get(`${board}/${num}`).subscribe(
      (res: any) => {
        console.log(res)
        this.articlePage = new ArticlePage(
          res.article_number,
          res.article_url,
          res.author,
          res.board_name,
          res.content,
          res.create_time,
          res.discussion_count,
          res.discussions,
          res.amount_of_dislikes,
          res.ip_location,
          res.is_following,
          res.last_update,
          res.amount_of_likes,
          res.amount_of_neutrals,
          res.reply_from_pttLite,
          res.title,
        );
        this.$overlay.finishLoading();
        this.$overlay.toggle(EOverlayType.Article);
      }
    );
  }

  public favoriteArtice(board: string, id: string, isUpdateArticle = false) {
    this.$http.post(`follow/${board}/${id}`).subscribe(
      _ => {
        this.setArticles();
        if (isUpdateArticle) {
          this.setArticleContent(id, board);
        }
      }
    );
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
    this.$http.get('index').subscribe(
      (res: any) => {
        console.log(res);
        this.$overlay.finishLoading();
        this.articles = res.articles.map(
          article => new Article(
            article.article_number,
            article.article_url,
            article.author,
            article.ip_location,
            article.is_following,
            article.board_name,
            article.content_snapshot,
            article.create_time,
            article.amount_of_likes,
            article.amount_of_neutrals,
            article.title,
            article.amount_of_dislikes,
            article.amount_of_discussions,
          )
        );
        this.hotboards = res.top_8_amount_of_likes_boards.map(
          hotboard => new Hotboard(
            hotboard.board_class,
            hotboard.board_name,
            hotboard.board_url,
            hotboard.amount_of_likes,
          )
        );
      }
    );
  }

}
