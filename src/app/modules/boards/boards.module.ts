import { NavigationComponent } from './components/navigation/navigation.component';
import { OverlayModule } from './../overlay/overlay.module';
import { BoardsComponent } from './pages/boards/boards.component';
import { AllTopicsComponent } from './pages/all-topics/all-topics.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardsRoutingModule } from './boards-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    NavigationComponent,
    AllTopicsComponent,
    BoardsComponent,
  ],
  imports: [
    OverlayModule,
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
