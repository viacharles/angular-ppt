import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {

  constructor() { }



  public isArticle = false;
  public reverse: string;
  public whichNext: string;
  public leftChevron = false;
  public rightChevron = false;

  public closeArticle() {
    this.isArticle = !this.isArticle;
  }

  public articleNextLeftIn() {
    this.leftChevron = true;
    this.rightChevron = false;
    this.whichNext = '上一篇';
    this.reverse = 'row';
  }

  public articleNextLeftOut() {
    this.rightChevron = true;
    this.leftChevron = false;
    this.whichNext = '下一篇';
    this.reverse = 'row-reverse';
  }


}


