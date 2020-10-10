import { BoardsModule } from './../boards/boards.module';
import { LayoutComponent } from './pages/layout/layout.component';
import { NgModule } from '@angular/core';
import { OverlayModule } from '@overlay/overlay.module';
import { SharedModule } from '../shared/shared.module';
import { UserModule } from '../user/user.module';
import { LandingComponent } from '../landing/pages/landing/landing.component';


@NgModule({
  declarations: [
    LayoutComponent,
    LandingComponent,
  ],
  imports: [
    OverlayModule,
    SharedModule,
    BoardsModule,
    UserModule
  ],
  exports: [
    LayoutComponent,
    LandingComponent,
  ]
})
export class LayoutModule { }
