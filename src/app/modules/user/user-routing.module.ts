import { MyComponent } from './components/my/my.component';
import { UserGuard } from './user.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';


const routes: Routes = [
  {path: '',
  component: MyComponent,
  canActivate: [UserGuard],
  canActivateChild: [UserGuard],

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
