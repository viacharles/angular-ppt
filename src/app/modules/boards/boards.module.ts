import { BoardsComponent } from './pages/boards/boards.component';
import { AllTopicsComponent } from './pages/all-topics/all-topics.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardsRoutingModule } from './boards-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LandingComponent } from '../landing/pages/landing/landing.component';


@NgModule({
  declarations: [
    AllTopicsComponent,
    BoardsComponent,

  ],
  imports: [
    CommonModule,
    BoardsRoutingModule,
    SharedModule,
  ],
  exports: [
    AllTopicsComponent,
    BoardsComponent,
  ]
})
export class BoardsModule { }
