import { NavigationComponent } from './components/navigation/navigation.component';
import { OverlayModule } from './../overlay/overlay.module';
import { BoardsComponent } from './pages/boards/boards.component';
import { AllTopicsComponent } from './pages/all-topics/all-topics.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardsRoutingModule } from './boards-routing.module';
import { SharedModule } from '../shared/shared.module';
import { BaseballComponent } from './pages/eachBoard/baseball/baseball.component';
import { GossipingComponent } from './pages/eachBoard/gossiping/gossiping.component';
import { IosComponent } from './pages/eachBoard/ios/ios.component';
import { CChatComponent } from './pages/eachBoard/c-chat/c-chat.component';
import { LolComponent } from './pages/eachBoard/lol/lol.component';
import { LifeismoneyComponent } from './pages/eachBoard/lifeismoney/lifeismoney.component';
import { MobilecommComponent } from './pages/eachBoard/mobilecomm/mobilecomm.component';
import { NabComponent } from './pages/eachBoard/nab/nab.component';


@NgModule({
  declarations: [
    NavigationComponent,
    AllTopicsComponent,
    BoardsComponent,
    BaseballComponent,
    GossipingComponent,
    IosComponent,
    CChatComponent,
    LolComponent,
    LifeismoneyComponent,
    MobilecommComponent,
    NabComponent,
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
