import { ArticleContentComponent } from './../shared/components/article-content/article-content.component';
import { BoardsComponent } from './pages/boards/boards.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: BoardsComponent,
    children: [
      {
        path: 'article',
        component: ArticleContentComponent,
      },
      {
        path: 'user',
        loadChildren: () => import('../user/user.module').then(m => m.UserModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardsRoutingModule { }
