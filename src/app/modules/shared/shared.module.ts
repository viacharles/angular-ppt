import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CommentComponent } from './components/comment/comment.component';
import { ArticleCoverComponent } from './components/article-cover/article-cover.component';
import { ArticleContentComponent } from './components/article-content/article-content.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';



@NgModule({
  declarations: [
    ArticleContentComponent,
    ArticleCoverComponent,
    CommentComponent,
    NavComponent,
    NavigationComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ArticleContentComponent,
    ArticleCoverComponent,
    CommentComponent,
    NavComponent,
    FormsModule,
    CommonModule,
    NavigationComponent,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
