import { ArticleService } from './article.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleContentService {

  constructor(
    private http: HttpClient,
    public $article: ArticleService,
  ) {
   }


  public setArticleContent(num: string, board: string) {
    this.http.get('https://pttlite.ddns.net/' + board + '/' + num).subscribe(
      (res: any) => {
        console.log('嗨' , res);
      }
    );
 }
}



