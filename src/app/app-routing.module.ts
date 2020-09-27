import { MyComponent } from './modules/user/components/my/my.component';
import { AllTopicsComponent } from './modules/boards/pages/all-topics/all-topics.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleContentComponent } from './modules/shared/components/article-content/article-content.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'boards',
        loadChildren: () => import('./modules/boards/boards.module').then(m => m.BoardsModule)
      }
    ]
  }
];

  // const routes: Routes = [
  //   { path: '', redirectTo: '/article', pathMatch: 'full' },
  //   { path: 'article', component: ArticleComponent },
  //   { path: 'article-content', component: ArticleContentComponent },
  //   { path: 'all-topics', component: AllTopicsComponent },
  //   { path: 'register', component: RegisterComponent },
  //   { path: 'my', component: MyComponent },
  //   { path: '**', component: ArticleComponent },
  // ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
