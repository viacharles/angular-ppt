import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingGuard } from './landing.guard';
import { LandingComponent } from './pages/landing/landing.component';


const routes: Routes = [
  {
    path: '',
    canActivate: [LandingGuard],
    canActivateChild: [LandingGuard],
    children: [
      {path: '', component: LandingComponent},
      {path: 'test', component: LandingComponent}
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
