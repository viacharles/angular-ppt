import { ArticleNextComponent } from './../boards/components/article-next/article-next.component';
import { LoginOverlayComponent } from './login-overlay/login-overlay.component';
import { FootOverlayComponent } from './foot-overlay/foot-overlay.component';
import { OverlayComponent } from './overlay/overlay.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ArticleOverlayComponent } from './article-overlay/article-overlay.component';
import { LoadingComponent } from './loading/loading.component';



@NgModule({
  declarations: [
    OverlayComponent,
    FootOverlayComponent,
    LoginOverlayComponent,
    ArticleOverlayComponent,
    ArticleNextComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    OverlayComponent,
    FootOverlayComponent,
    LoginOverlayComponent,
    ArticleOverlayComponent,
    ArticleNextComponent
  ]
})
export class OverlayModule { }
