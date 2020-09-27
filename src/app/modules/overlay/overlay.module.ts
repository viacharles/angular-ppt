import { LoginOverlayComponent } from './login-overlay/login-overlay.component';
import { FootOverlayComponent } from './foot-overlay/foot-overlay.component';
import { OverlayComponent } from './overlay/overlay.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    OverlayComponent,
    FootOverlayComponent,
    LoginOverlayComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    OverlayComponent,
  ]
})
export class OverlayModule { }
