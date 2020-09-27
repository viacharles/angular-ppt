import { LandingModule } from './../landing/landing.module';
import { BoardsComponent } from './pages/boards/boards.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: BoardsComponent,
    children: [
      {
        path: 'landing',
        loadChildren: () => import('../landing/landing.module').then(m => m.LandingModule)
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
