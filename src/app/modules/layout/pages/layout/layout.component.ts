
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OverlayService } from 'src/app/modules/shared/service/overlay.service';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    public router: Router ,
    public $overlay: OverlayService,
  ) { }

  public disabledScroll: boolean;

  ngOnInit(): void {
  }

// public onScroll() {
//     if (this.$overlay.isArticle = true){
//       this.disabledScroll = true;
//     }
//   }

}
