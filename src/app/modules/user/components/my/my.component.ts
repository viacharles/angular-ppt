import { HttpHeaders } from '@angular/common/http';
import { MemberCenter } from './../../../boards/models/article.model';
import { IMyCenter } from './../../../../utilities/interfaces/interface';
import { HttpService } from './../../../shared/service/http.service';
import { ArticleService } from '@services/article.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.scss']
})
export class MyComponent implements OnInit {

  constructor(
    public $article: ArticleService,
    private $http: HttpService,
  ) {
    this.getHeadshot();
  }

  public memberCenter: MemberCenter;

  public getHeadshot() {
    this.$http.post('member_center').subscribe(
      (res: any) => {
        console.log(res);
        this.memberCenter = new MemberCenter(
          res.member_center.nickname,
          res.member_center.user_icon,
        );
      }
    );
  }


  ngOnInit(): void {
  }

}
