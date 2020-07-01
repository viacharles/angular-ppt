import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {

  constructor() { }



  public a = 1 ;
  public close = false ;
  public closeArticle(){
  this.close = !this.close ;
  }

}


