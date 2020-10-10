import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LandingComponent } from './modules/landing/pages/landing/landing.component';


const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'boards',
        loadChildren: () => import('./modules/boards/boards.module').then(m => m.BoardsModule)
      },
      {
        path: 'landing',
        component: LandingComponent
      },
      {
        path: 'my',
        loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
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
