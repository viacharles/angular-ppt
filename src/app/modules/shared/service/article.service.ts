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
    public $overlay: OverlayService,
    public $auth: AuthService,
  ) {
    this.setArticles();
    // this.getHeadshot();
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
        this.articles = res.articles.map(
          article => new Article(
            article.article_number,
            article.article_url,
            article.author,
            article.ip_location,
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

  public setArticleContent(num: string, board: string) {
    

    this.$http.get(`${board}/${num}`).subscribe(
      (res: any) => {
        console.log(res);
        this.articlePage = new ArticlePage(
          res.article_page.article_number,
          res.article_page.article_url,
          res.article_page.author,
          res.article_page.board_name,
          res.article_page.content,
          res.article_page.create_time,
          res.article_page.discussion_count,
          res.article_page.discussions,
          res.article_page.amount_of_dislikes,
          res.article_page.ip_location,
          res.article_page.last_update,
          res.article_page.amount_of_likes,
          res.article_page.amount_of_neutrals,
          res.article_page.reply_from_pttLite,
          res.article_page.title,
        );
        this.$overlay.toggle(EOverlayType.Article);
      }
    );
  }

//   public getHeadshot() {
//     this.$http.post('member_center').subscribe(
//       (res: any) => {
//         console.log(res);
//         this.memberCenter = new MemberCenter(
//           res.member_center.nickname,
//           res.member_center.user_icon,
//         );
//       }
//     );
//     return new HttpHeaders().set(
//       'Authorization',
//       `Bearer ${sessionStorage.getItem('token')}`
//     );
//   }
}
