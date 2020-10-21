import { FootOverlayComponent } from './../overlay/foot-overlay/foot-overlay.component';
import { OverlayModule } from '@overlay/overlay.module';
import { ArticleContentComponent } from './../shared/components/article-content/article-content.component';
import { BoardsComponent } from './pages/boards/boards.component';
import { NgModule, Component } from '@angular/core';
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
