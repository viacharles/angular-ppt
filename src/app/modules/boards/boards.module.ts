import { BoardsComponent } from './pages/boards/boards.component';
import { AllTopicsComponent } from './pages/all-topics/all-topics.component';
import { ArticleNextComponent } from './components/article-next/article-next.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardsRoutingModule } from './boards-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ArticleNextComponent,
    AllTopicsComponent,
    BoardsComponent,
  ],
  imports: [
    CommonModule,
    BoardsRoutingModule,
    SharedModule,
  ]
})
export class BoardsModule { }
